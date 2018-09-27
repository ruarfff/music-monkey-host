import AppBar from '@material-ui/core/AppBar/AppBar'
import { WithStyles } from '@material-ui/core/es'
import Grid from '@material-ui/core/Grid/Grid'
import withStyle from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import InviteCopyAlert from '../components/InviteLink/InviteCopyAlert'
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

const decorated = withStyle(() => ({
  tabContainer: {
    background: 'white',
    boxShadow: 'none',
    borderBottom: '1px solid #d6d6d6',
    marginBottom: '10px'
  },
  tab: {
  },
  tabs: {
    color: '#5157ab',
    borderBottom: '1px solid #5157ab'
  },
  content: {
    paddingTop: 0,
    height: '100%',
  }
}))

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
    <Typography style={{height: '100%'}} component="div" dir={dir}>
      {children}
    </Typography>
  )
}

class EventView extends React.Component<IEventViewProps & WithStyles, IEventViewState> {
  public state = {
    tabIndex: 0
  }

  public componentDidMount() {
    const eventId = this.props.match.params.eventId
    this.props.getEventById(eventId)
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
      <div className="eventViewWrapper">
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
    const { tabIndex } = this.state
    const { classes } = this.props

    return (
      <Grid className={classes.content} container={true} spacing={16}>
        <Grid className={classes.content} item={true} xs={12}>
          <AppBar
            position="static"
            color="default"
            className={classes.tabContainer}
          >
            <Tabs
              value={tabIndex}
              onChange={this.handleTabChange}
              TabIndicatorProps={{className: classes.tabs}}
              centered={true}
              className={classes.tabs}
              fullWidth={true}
            >
              <Tab className={classes.tab} label="Event Summary" />
              <Tab className={classes.tab} label="Playlist" />
              <Tab className={classes.tab} label="Guest List" />
            </Tabs>
          </AppBar>
          {tabIndex === 0 && (
            <TabContainer className={classes.content} dir={'x'}>
              <EventSummaryView />
            </TabContainer>
          )}
          {tabIndex === 1 && (
            <TabContainer className={classes.content} dir={'x'}>
              <EventTracksView />
            </TabContainer>
          )}
          {tabIndex === 2 && (
            <TabContainer className={classes.content} dir={'x'}>
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

export default decorated(EventView)
