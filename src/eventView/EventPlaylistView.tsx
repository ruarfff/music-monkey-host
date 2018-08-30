import AppBar from '@material-ui/core/AppBar/AppBar'
import Badge from '@material-ui/core/Badge/Badge'
import Grid from '@material-ui/core/Grid/Grid'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import * as React from 'react'
import IEvent from '../event/IEvent'
import EventPlaylist from '../eventPlaylist/EventPlaylistContainer'
import EventPlaylistSummary from '../eventPlaylist/EventPlaylistSummaryContainer'
import IAction from '../IAction'
import {
  subscribeToSuggestionsAccepted,
  subscribeToVotesModified
} from '../notification'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import './EventPlaylistView.css'
import EventRejectedSuggestions from './EventRejectedSuggestionsContainer'
import EventSuggestions from './EventSuggestionsContainer'

interface IEventPlaylistViewState {
  tabIndex: number
}

interface IEventPlaylistViewProps {
  event: IEvent
  acceptedSuggestions: IDecoratedSuggestion[]
  stagedSuggestions: IDecoratedSuggestion[]
  pendingSuggestions: IDecoratedSuggestion[]
  getEventSuggestions(eventId: string): IAction
  fetchEventVotes(eventId: string): IAction
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

class EventPlaylistView extends React.Component<
  IEventPlaylistViewProps,
  IEventPlaylistViewState
> {
  public state = {
    tabIndex: 0
  }

  public componentDidMount() {
    const { event } = this.props
    const eventId = event.eventId || ''

    this.props.getEventSuggestions(eventId)
    subscribeToSuggestionsAccepted(eventId, this.handleSuggestionNotification)
    this.props.fetchEventVotes(eventId)
    subscribeToVotesModified(eventId, this.handleEventVotesModified)
  }

  public render() {
    const { tabIndex } = this.state
    return (
      <Grid container={true} spacing={24}>
        <Grid item={true} sm={12}>
          <EventPlaylistSummary />
        </Grid>
        <Grid item={true} sm={12}>
          <AppBar position="static" color="default">
            <Tabs
              value={tabIndex}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered={true}
            >
              <Tab
                label="Event Playlist"
                icon={this.renderEventPlaylistIcon()}
              />
              <Tab label="Suggested" icon={this.renderSuggestionsIcon()} />
              <Tab label="Rejected" />
            </Tabs>
          </AppBar>
          {tabIndex === 0 && (
            <TabContainer dir={'x'}>
              <EventPlaylist />
            </TabContainer>
          )}
          {tabIndex === 1 && (
            <TabContainer dir={'x'}>
              <EventSuggestions />
            </TabContainer>
          )}
          {tabIndex === 2 && (
            <TabContainer dir={'x'}>
              <EventRejectedSuggestions />
            </TabContainer>
          )}
        </Grid>
      </Grid>
    )
  }

  private handleTabChange = (event: any, index: number) => {
    this.setState({ tabIndex: index })
  }

  private renderEventPlaylistIcon = () => {
    const { stagedSuggestions } = this.props
    const numAcceptedTracks = stagedSuggestions ? stagedSuggestions.length : 0
    if (numAcceptedTracks > 0) {
      return (
        <Badge
          className="EventPlaylistView-badge"
          badgeContent={numAcceptedTracks}
          color="primary"
        >
          <PlaylistPlayIcon />
        </Badge>
      )
    }
    return <PlaylistPlayIcon />
  }

  private renderSuggestionsIcon = () => {
    const { pendingSuggestions } = this.props
    const numSuggestions = pendingSuggestions ? pendingSuggestions.length : 0
    if (numSuggestions > 0) {
      return (
        <Badge
          className="EventPlaylistView-badge"
          badgeContent={numSuggestions}
          color="primary"
        >
          <SubscriptionIcon />
        </Badge>
      )
    }
    return <SubscriptionIcon />
  }

  private handleSuggestionNotification = () => {
    const { event } = this.props
    if (event && event.eventId) {
      this.props.getEventSuggestions(event.eventId)
    }
  }

  private handleEventVotesModified = () => {
    const { event } = this.props
    if (event && event.eventId) {
      this.props.fetchEventVotes(event.eventId)
    }
  }
}

export default EventPlaylistView
