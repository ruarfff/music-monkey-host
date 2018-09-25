import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid'
import { WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import { History } from 'history'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import MapComponent from '../components/MapComponent'
import IEvent from '../event/IEvent'
import IPlaylistInput from '../event/IPlaylistInput'
import EventDateTimePicker from '../eventCreation/EventDateTimePicker'
import EventInput from '../eventCreation/EventInput'
import PlaylistSelection from '../eventCreation/PlaylistSelection'
import IAction from '../IAction'
import LocationAutoComplete from '../location/LocationAutoComplete'
import IPlaylist from '../playlist/IPlaylist'
import IPlaylistDetails from '../playlist/IPlaylistDetails'
import FileUpload from '../upload/FileUpload'
import IUser from '../user/IUser'

const decorate = withStyles(() => ({
  editContainer: {
    padding: '20px'
  },
  imagePickContainer: {
    marginTop: '30px'
  },
}))

interface IEditEventProps extends RouteComponentProps<any> {
  user: IUser
  event: IEvent
  eventEdit: IEvent
  deleteSelected: boolean
  deleteSuccess: boolean
  deleteFailed: boolean
  editSuccess: boolean
  editFailure: boolean
  playlists: IPlaylist[]
  playlistInput: IPlaylistInput
  history: History
  getEventById(eventId: string): IAction
  onEventDeleteSelected(): IAction
  onEventDeleteClosed(): IAction
  deleteEvent(event: IEvent): IAction
  onDeleteAcknowledged(): IAction
  eventImageUploaded(): IAction
  eventImageUploadError(): IAction
  locationChanged(): IAction
  locationSelected(): IAction
  selectCreatePlaylist(): IAction
  selectExistingPlaylist(): IAction
  fetchPlaylists(user: IUser): IAction
  eventContentUpdated(content: any): IAction
  closeCreatePlaylist(): IAction
  closeExistingPlaylist(): IAction
  createEventPlaylist(playlist: IPlaylistDetails): IAction
  editEventRequest(event: IEvent): IAction
  editEventSuccess(): IAction
  editEventFailure(): IAction
  editEventClose(): IAction
  eventSavingReset(): IAction
}

const SweetAlert = withReactContent(Swal) as any

class EditEvent extends React.PureComponent<
  IEditEventProps & WithStyles
  > {
  public render() {
    const {
      playlistInput,
      user,
      deleteFailed,
      deleteSuccess,
      editFailure,
      editSuccess,
      eventImageUploaded,
      eventImageUploadError,
      fetchPlaylists,
      playlists,
      eventEdit,
      locationSelected,
      locationChanged,
      selectExistingPlaylist,
      closeExistingPlaylist,
      selectCreatePlaylist,
      closeCreatePlaylist,
      createEventPlaylist,
      classes,
    } = this.props
    return (
      <Grid className={classes.editContainer} container={true} spacing={24}>
        <Grid container={true} spacing={24}>
          <Grid item={true} md={6}>
            <EventInput
              label={'Event Title'}
              placeholder={'Enter new event title'}
              value={eventEdit && eventEdit.name}
              onChange={this.handleContentEdit('name')}
            />
            <EventInput
              label={'Event description'}
              maxRows={11}
              value={eventEdit && eventEdit.description || ''}
              onChange={this.handleContentEdit('description')}
            />
          </Grid>

          <Grid className={classes.imagePickContainer} item={true} md={6}>
            <FileUpload
              onUpload={eventImageUploaded}
              onUploadError={eventImageUploadError}
            />
          </Grid>
        </Grid>

        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12} sm={6}>
            <EventInput
              label={'Venue'}
              value={eventEdit && eventEdit.venue || ''}
              onChange={this.handleContentEdit('venue')}
            />
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <LocationAutoComplete
              value={eventEdit && eventEdit.location ? eventEdit.location.address || '' : ''}
              onSelect={locationSelected}
              onChange={locationChanged}
              placeholder="Search for place"
              formClass="CreateEvent-formItem"
            />
          </Grid>
        </Grid>
        <Grid container={true}>
          <MapComponent coords={eventEdit.location && eventEdit.location.latLng}/>
        </Grid>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12} sm={6}>
            <EventDateTimePicker
              value={eventEdit && eventEdit.startDateTime}
              onChange={this.handleContentEdit('startDateTime')}
              label={"Starting At"}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <EventDateTimePicker
              value={eventEdit && eventEdit.endDateTime}
              onChange={this.handleContentEdit('endDateTime')}
              label={"Finishing At"}
            />
          </Grid>
        </Grid>


        <Grid item={true} xs={12} sm={12}>
          {user && <PlaylistSelection
            playlists={playlists}
            fetchPlaylists={fetchPlaylists}
            user={user}
            value={eventEdit && eventEdit.playlistUrl}
            onPlaylistAdded={this.handleContentEdit('playlistUrl')}
            playlistInput={playlistInput}
            selectExistingPlaylist={selectExistingPlaylist}
            closeExistingPlaylist={closeExistingPlaylist}
            selectCreatePlaylist={selectCreatePlaylist}
            closeCreatePlaylist={closeCreatePlaylist}
            createEventPlaylist={createEventPlaylist}
          />}
        </Grid>

        <Button
          variant="raised"
          color="secondary"
          onClick={this.handleDeleteSelected}
        >
          Delete
          <DeleteIcon />
        </Button>
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleSave}
        >
          Save
        </Button>
        {deleteFailed && this.showDeleteFailed()}
        {deleteSuccess && this.showDeleteSuccess()}
        {editSuccess && this.showEditFalure()}
        {editFailure && this.showEditResult()}
      </Grid>
    )
  }

  public componentDidMount() {
    this.props.getEventById(this.props.match.params.eventId)
  }

  private showEditResult = () => {
    SweetAlert.fire({
      title: 'Event Edited',
      type: 'success'
    }).then(() => {
      this.props.editEventSuccess()
      this.props.editEventClose()
      this.props.eventSavingReset()
      this.props.history.goBack()
    })
  }

  private showEditFalure = () => {
    SweetAlert.fire({
      title: 'Sorry. An error occurred when trying to edit this Event.',
      type: 'Error'
    }).then(() => {
      this.props.editEventFailure()
    })
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

  private handleContentEdit = (key: string) => (content: any) => {
    const eventPart = {}
    eventPart[key] = content
    this.props.eventContentUpdated(eventPart)
  }

  private handleSave = () => {
    this.props.editEventRequest(this.props.eventEdit)
  }
}

export default decorate(EditEvent)
