import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import Delete from '@material-ui/icons/Delete'
import Save from '@material-ui/icons/Save'
import { DateTimePicker } from 'material-ui-pickers'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import IEvent from '../event/IEvent'
import IPlaylistInput from '../event/IPlaylistInput'
import IAction from '../IAction'
import LocationAutoComplete from '../location/LocationAutoComplete'
import IPlaylist from '../playlist/IPlaylist'
import FileUpload from '../upload/FileUpload'
import IUser from '../user/IUser'
import './CreateEvent.css'
import EventCodeInput from './EventCodeInput'
import EventDescriptionInput from './EventDescriptionInput'
import EventNameInput from './EventNameInput'
import EventOrganizerInput from './EventOrganizerInput'
import EventVenueInput from './EventVenueInput'
import PlaylistSelection from './PlaylistSelection'

const SweetAlert = withReactContent(Swal) as any

interface ICreateEventProps {
  user: IUser
  event: IEvent
  shouldShowSavedDialogue: boolean
  playlistInput: IPlaylistInput
  playlists: IPlaylist[]
  cancel(): void
  closeCreatePlaylist(): IAction
  closeExistingPlaylist(): IAction
  createEventPlaylist(playlist: IPlaylist): IAction
  eventContentUpdated(content: any): IAction
  eventImageUploadError(): IAction
  eventImageUploaded(): IAction
  initializeCreateForm(event: IEvent, user: IUser): IAction
  locationChanged(): IAction
  locationSelected(): IAction
  saveEvent(event: IEvent): IAction
  selectCreatePlaylist(): IAction
  selectExistingPlaylist(): IAction
  fetchPlaylists(user: IUser): IAction
}

const showSavedDialogue = (onCancel: () => void) => {
  SweetAlert.fire({
    confirmButtonColor: '#00838F',
    title: 'Event Saved!',
    type: 'success'
  }).then(onCancel)
}

export default class CreateEvent extends React.PureComponent<
  ICreateEventProps
> {
  public componentDidMount() {    
    this.props.initializeCreateForm(this.props.event, this.props.user)
  }

  public render() {
    const {
      cancel,
      closeExistingPlaylist,
      closeCreatePlaylist,
      createEventPlaylist,
      eventImageUploaded,
      eventImageUploadError,
      event,
      locationChanged,
      locationSelected,
      playlistInput,
      playlists,
      shouldShowSavedDialogue,
      selectCreatePlaylist,
      selectExistingPlaylist,
      fetchPlaylists,
      user
    } = this.props

    if (shouldShowSavedDialogue) {
      showSavedDialogue(cancel)
    }

    return (
      <form className="CreateEvent-root" noValidate={true} autoComplete="off">
        <Grid
          container={true}
          spacing={24}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item={true} xs={12} sm={6}>
            <EventNameInput
              value={event.name}
              onChange={this.handleContentUpdated('name')}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <EventOrganizerInput
              value={event.organizer}
              onChange={this.handleContentUpdated('organizer')}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <FileUpload
              onUpload={eventImageUploaded}
              onUploadError={eventImageUploadError}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <EventDescriptionInput
              value={event.description || ''}
              onChange={this.handleContentUpdated('description')}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <EventVenueInput
              value={event.venue || ''}
              onChange={this.handleContentUpdated('venue')}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <LocationAutoComplete
              value={event.location ? event.location.address || '' : ''}
              onSelect={locationSelected}
              onChange={locationChanged}
              placeholder="Search for place"
              formClass="CreateEvent-formItem"
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <DateTimePicker
              disablePast={true}
              autoOk={true}
              fullWidth={true}
              ampm={false}
              value={event.startDateTime}
              onChange={this.handleContentUpdated('startDateTime')}
              label="Starting At"
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <DateTimePicker
              disablePast={true}
              autoOk={true}
              fullWidth={true}
              ampm={false}
              value={event.endDateTime}
              onChange={this.handleContentUpdated('endDateTime')}
              label="Finishing At"
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <EventCodeInput
              value={event.eventCode || ''}
              onChange={this.handleContentUpdated('eventCode')}
            />
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <PlaylistSelection
              playlists={playlists}
              fetchPlaylists={fetchPlaylists}
              user={user}
              value={event.playlistUrl}
              onPlaylistAdded={this.handleContentUpdated('playlistUrl')}
              playlistInput={playlistInput}
              selectExistingPlaylist={selectExistingPlaylist}
              closeExistingPlaylist={closeExistingPlaylist}
              selectCreatePlaylist={selectCreatePlaylist}
              closeCreatePlaylist={closeCreatePlaylist}
              createEventPlaylist={createEventPlaylist}
            />
          </Grid>
        </Grid>
        <div>
          <Button
            variant="raised"
            color="secondary"
            onClick={this.handleCancel}
          >
            Cancel
            <Delete />
          </Button>
          <Button
            disabled={!event.name || !event.organizer || !event.playlistUrl}
            variant="raised"
            color="primary"
            onClick={this.handleSaveEvent}
          >
            Save
            <Save />
          </Button>
        </div>
      </form>
    )
  }

  private handleCancel = (e: any) => {
    this.props.cancel()
  }

  private handleSaveEvent = (e: any) => {
    this.props.saveEvent(this.props.event)
  }

  private handleContentUpdated = (key: string) => (content: any) => {
    const  eventPart = {}
    eventPart[key] = content
    this.props.eventContentUpdated(eventPart)
  }
}
