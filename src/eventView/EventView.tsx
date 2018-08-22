import { Badge } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import Zoom from '@material-ui/core/Zoom/Zoom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import PeopleIcon from '@material-ui/icons/People'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EventFetchError from '../event/EventFetchError'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import {
  subscribeToSuggestionsAccepted,
  subscribeToVotesModified
} from '../notification'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import LinkButton from '../util/LinkButton'
import EventGuests from './EventGuestsContainer'
import EventPlaylist from './EventPlaylistContainer'
import EventSuggestions from './EventSuggestionsContainer'
import './EventView.css'
import InviteCopyAlert from './InviteCopyAlert'
import InviteLink from './InviteLink'

interface IEventState {
  tabIndex: number
}

interface IEventViewProps extends RouteComponentProps<any> {
  error: Error
  event: IEvent
  loading: boolean
  deleteSelected: boolean
  deleteSuccess: boolean
  deleteFailed: boolean
  copiedToClipboard: boolean
  acceptedSuggestions: IDecoratedSuggestion[]
  stagedSuggestions: IDecoratedSuggestion[]
  pendingSuggestions: IDecoratedSuggestion[]
  getEventById(eventId: string): IAction
  onEventTabIndexChange(index: number): IAction
  onEventDeleteSelected(): IAction
  onEventDeleteClosed(): IAction
  deleteEvent(event: IEvent): IAction
  onDeleteAcknowledged(): IAction
  copyEventInvite(): IAction
  acknowledgeEventInviteCopied(): IAction
  getEventSuggestions(eventId: string): IAction
  fetchEventVotes(eventId: string): IAction
}

const SweetAlert = withReactContent(Swal) as any

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

class EventView extends React.Component<IEventViewProps, IEventState> {
  public state = {
    tabIndex: 0
  }

  public componentDidUpdate(prevProps: IEventViewProps) {
    const prevEvent = prevProps.event
    const { event } = this.props
    let prevEventId = ''
    let eventId = ''

    if (prevEvent) {
      prevEventId = prevEvent.eventId || ''
    }
    if (event) {
      eventId = event.eventId || ''
    }

    if (eventId !== prevEventId) {
      this.props.getEventSuggestions(eventId)
      subscribeToSuggestionsAccepted(eventId, this.handleSuggestionNotification)
      this.props.fetchEventVotes(eventId)
      subscribeToVotesModified(eventId, this.handleEventVotesModified)
    }
  }

  public componentDidMount() {
    this.props.getEventById(this.props.match.params.eventId)
  }

  public render() {
    const {
      loading,
      error,
      event,
      copiedToClipboard,
      acknowledgeEventInviteCopied,
      deleteFailed,
      deleteSuccess
    } = this.props
    const shouldShowEvent: boolean = !loading && !!event

    return (
      <div>
        {loading && <LoadingSpinner />}
        {loading &&
          error && <EventFetchError onTryAgain={this.handleGetEvent} />}
        {shouldShowEvent && (
          <Zoom in={shouldShowEvent}>{this.renderEventView()}</Zoom>
        )}
        {copiedToClipboard && (
          <InviteCopyAlert
            message="Copied to Clipboard"
            onClose={acknowledgeEventInviteCopied}
          />
        )}
        {deleteFailed && this.showDeleteFailed()}
        {deleteSuccess && this.showDeleteSuccess()}
      </div>
    )
  }

  private handleGetEvent() {
    this.props.getEventById(this.props.match.params.eventId)
  }

  private handleTabChange = (event: any, index: number) => {
    this.setState({ tabIndex: index })
  }

  private showDeleteSuccess = () => {
    SweetAlert.fire({
      title: 'Event Deleted',
      type: 'success'
    }).then(() => {
      this.props.onDeleteAcknowledged()
      this.props.onEventDeleteClosed()
    })
  }

  private showDeleteFailed = () => {
    SweetAlert.fire({
      title: "Couldn't delete Event",
      text: 'Sorry. An error occurred when trying to delete this Event.',
      type: 'error'
    }).then(() => {
      this.props.onEventDeleteClosed()
    })
  }

  private handleDeleteSelected = () => () => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'This will completely remove this event',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.value) {
        this.props.deleteEvent(this.props.event)
      }
      this.props.onEventDeleteClosed()
    })
  }

  private renderEventView = () => {
    const { event, copyEventInvite, location } = this.props
    const inviteId = event && event.invites ? event.invites[0] : ''
    const { tabIndex } = this.state
    return (
      <Grid container={true} spacing={16}>
        <Grid item={true} xs={12} sm={4}>
          <Typography variant="display3" noWrap={true}>
            {event && event.name}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={4}>
          <InviteLink inviteId={inviteId} onCopyEventInvite={copyEventInvite} />
        </Grid>
        <Grid item={true} xs={12} sm={4}>
          <LinkButton
            variant="raised"
            color="primary"
            to={location.pathname + '/edit'}
          >
            Edit
            <EditIcon />
          </LinkButton>
          <Button
            variant="raised"
            color="secondary"
            onClick={this.handleDeleteSelected()}
          >
            Delete
            <DeleteIcon />
          </Button>
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
              <Tab label="Playlist" icon={this.renderEventPlaylistIcon()} />
              <Tab label="Suggestions" icon={this.renderSuggestionsIcon()} />
              <Tab label="Guests" icon={<PeopleIcon />} />
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
              <EventGuests />
            </TabContainer>
          )}
        </Grid>
      </Grid>
    )
  }

  private renderEventPlaylistIcon = () => {
    const { stagedSuggestions } = this.props
    const numAcceptedTracks = stagedSuggestions ? stagedSuggestions.length : 0
    if (numAcceptedTracks > 0) {
      return (
        <Badge
          className="EventView-badge"
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
          className="EventView-badge"
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

export default EventView
