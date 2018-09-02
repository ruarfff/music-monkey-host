import AppBar from '@material-ui/core/AppBar/AppBar'
import Grid from '@material-ui/core/Grid/Grid'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import EventFetchError from '../event/EventFetchError'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import {
  subscribeToSuggestionsAccepted,
  subscribeToVotesModified
} from '../notification'
import EventGuests from './EventGuestsContainer'
import EventTracksView from './EventPlaylistViewContainer'
import EventSummaryView from './EventSummaryViewContainer'
import './EventView.css'
import InviteCopyAlert from './InviteCopyAlert'
import InviteLink from './InviteLink'

interface IEventViewState {
  tabIndex: number
}

interface IEventViewProps extends RouteComponentProps<any> {
  error: Error
  event: IEvent
  loading: boolean
  copiedToClipboard: boolean
  getEventById(eventId: string): IAction
  copyEventInvite(): IAction
  acknowledgeEventInviteCopied(): IAction
  getEventSuggestions(eventId: string): IAction
  fetchEventVotes(eventId: string): IAction
  getEventByIdNoLoading(eventId: string): IAction
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

class EventView extends React.Component<IEventViewProps, IEventViewState> {
  public state = {
    tabIndex: 0
  }

  public componentDidMount() {
    const eventId = this.props.match.params.eventId
    this.props.getEventById(this.props.match.params.eventId)
    this.props.getEventSuggestions(eventId)
    subscribeToSuggestionsAccepted(eventId, this.handleSuggestionNotification)
    this.props.fetchEventVotes(eventId)
    subscribeToVotesModified(eventId, this.handleEventVotesModified)
  }

  public render() {
    const {
      loading,
      error,
      event,
      copiedToClipboard,
      acknowledgeEventInviteCopied
    } = this.props
    const shouldShowEvent: boolean = !loading && !!event

    return (
      <div>
        {loading && <LoadingSpinner />}
        {loading &&
          error && <EventFetchError onTryAgain={this.handleGetEvent} />}
        {shouldShowEvent && this.renderEventView()}
        {copiedToClipboard && (
          <InviteCopyAlert
            message="Copied to Clipboard"
            onClose={acknowledgeEventInviteCopied}
          />
        )}
      </div>
    )
  }

  private renderEventView = () => {
    const { event, copyEventInvite } = this.props
    const inviteId = event && event.invites ? event.invites[0] : ''
    const { tabIndex } = this.state
    return (
      <Grid container={true} spacing={16}>
        <Grid item={true} xs={12} sm={8}>
          <Typography
            variant="display3"
            noWrap={true}
            gutterBottom={true}
            className="EventView-title"
          >
            {event && event.name}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={4}>
          <InviteLink inviteId={inviteId} onCopyEventInvite={copyEventInvite} />
        </Grid>
        <Grid item={true} xs={12}>
          <AppBar position="static" color="default">
            <Tabs
              value={tabIndex}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered={true}
            >
              <Tab label="Event Summary" />
              <Tab label="Playlist" />
              <Tab label="Guest List" />
            </Tabs>
          </AppBar>
          {tabIndex === 0 && (
            <TabContainer dir={'x'}>
              <EventSummaryView />
            </TabContainer>
          )}
          {tabIndex === 1 && (
            <TabContainer dir={'x'}>
              <EventTracksView />
            </TabContainer>
          )}
          {tabIndex === 2 && (
            <TabContainer dir={'x'}>
              <EventGuests />
            </TabContainer>
          )}
        </Grid>
      </Grid>
    )
  }

  private handleGetEvent() {
    this.props.getEventById(this.props.match.params.eventId)
  }

  private handleTabChange = (event: any, index: number) => {
    this.setState({ tabIndex: index })
  }

  private handleSuggestionNotification = () => {
    const eventId = this.props.match.params.eventId
    if (eventId) {
      this.props.getEventSuggestions(eventId)
    }
  }

  private handleEventVotesModified = () => {
    const eventId = this.props.match.params.eventId
    const { event } = this.props
    if (eventId) {
      this.props.fetchEventVotes(eventId)
    }
    if (event && event.settings.dynamicVotingEnabled) {
      this.props.getEventByIdNoLoading(eventId)
    }
  }
}

export default EventView
