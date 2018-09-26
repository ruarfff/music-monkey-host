import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import { Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import MapComponent from '../components/MapComponent'
import IEvent from '../event/IEvent'
import IPlaylistInput from '../event/IPlaylistInput'
import IAction from '../IAction'
import LocationAutoComplete from '../location/LocationAutoComplete'
import IPlaylist from '../playlist/IPlaylist'
import IPlaylistDetails from '../playlist/IPlaylistDetails'
import FileUpload from '../upload/FileUpload'
import IUser from '../user/IUser'
import './CreateEvent.css'
import CreateEventSteps from './CreateEventSteps'
import EventDateTimePicker from './EventDateTimePicker'
import EventInput from './EventInput'
import PlaylistSelection from './PlaylistSelection'
import ShareEvent from './ShareEvent'

const decorate = withStyles((theme: Theme) => ({
  button: {
    marginRight: '30px',
    '&:last-child': {
      marginRight: 0,
    }
  }
}))

type ICreateEventClasses =
  'button'

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
  createEventPlaylist(playlist: IPlaylistDetails): IAction
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
  copyEventInvite(): IAction
  eventSavingReset(): IAction
}

const showSavedDialogue = () => {
  SweetAlert.fire({
    confirmButtonColor: '#00838F',
    title: 'Event Saved!',
    type: 'success'
  }).then()
}

class CreateEvent extends React.PureComponent<
  ICreateEventProps & WithStyles<ICreateEventClasses>
  > {

  public state = {
    currentStep: 0,
  }

  public componentDidMount() {
    this.props.eventSavingReset()
    this.props.initializeCreateForm(this.props.event, this.props.user)
  }

  public prevStep = () => {
    const { currentStep } = this.state
    if ( currentStep !== 0 ) {
      this.setState({currentStep: currentStep - 1})
    }
  }

  public nextStep = () => {
    const { currentStep } = this.state
    if ( currentStep !== 2 ) {
      this.setState({currentStep: currentStep + 1})
    }
  }

  public renderMap = (coords: any) => {
    return (
      <MapComponent
        coords={coords}
      />
    )
  }

  public renderFirstStep = () =>  {
    const {
      event,
      eventImageUploaded,
      eventImageUploadError,
      classes,
    } = this.props
    return (
      <React.Fragment>
        <Grid item={true} xs={12} sm={6}>
          <EventInput
            label={'Event Name'}
            placeholder={'Provide a name for your event'}
            value={event.name}
            onChange={this.handleContentUpdated('name')}
          />
          <EventInput
            label={'Event description'}
            maxRows={11}
            value={event.description || ''}
            onChange={this.handleContentUpdated('description')}
          />
        </Grid>

        <Grid item={true} xs={12} sm={6}>
          <FileUpload
            onUpload={eventImageUploaded}
            onUploadError={eventImageUploadError}
          />
        </Grid>

        <Grid item={true} xs={12} sm={6}>
          <EventInput
            label={'Organizer'}
            placeholder={'Who is organising this event?'}
            value={event.organizer}
            onChange={this.handleContentUpdated('organizer')}
          />
        </Grid>
        <div className="control-btn-row">
          <Button
            variant="raised"
            color="secondary"
            onClick={this.handleCancel}
            className={classes.button}
          >
            <span className="control-btn-text-primary">Cancel</span>
          </Button>
          <Button
            onClick={this.nextStep}
            color="primary"
            variant="raised"
            className={classes.button}
          >
            <span className="control-btn-text-secondary">Next</span>
          </Button>
        </div>
      </React.Fragment>
    )
  }

  public renderSecondStep = () => {
    const {
      event,
      selectCreatePlaylist,
      selectExistingPlaylist,
      fetchPlaylists,
      user,
      locationChanged,
      locationSelected,
      playlistInput,
      playlists,
      closeExistingPlaylist,
      closeCreatePlaylist,
      createEventPlaylist,
      classes
    } = this.props

    return (
      <React.Fragment>
        <Grid item={true} xs={12} sm={6}>
          <EventInput
            label={'Venue'}
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
          <EventDateTimePicker
            value={event.startDateTime}
            onChange={this.handleContentUpdated('startDateTime')}
            label={"Starting At"}
          />
        </Grid>

        <Grid item={true} xs={12} sm={6}>
          <EventDateTimePicker
            value={event.endDateTime}
            onChange={this.handleContentUpdated('endDateTime')}
            label={"Finishing At"}
          />
        </Grid>
        {event.location && this.renderMap(event.location.latLng)}
        <Grid item={true} xs={12} sm={12}>
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
        <div className='control-btn-row'>
          <Button
            variant="raised"
            color="secondary"
            onClick={this.handleCancel}
            className={classes.button}
          >
            <span className="control-btn-text-primary">Cancel</span>
          </Button>
          <Button
            variant="raised"
            color="secondary"
            onClick={this.prevStep}
            className={classes.button}
          >
            <span className="control-btn-text-primary">Prev</span>
          </Button>
          <Button
            disabled={!event.name || !event.organizer || !event.playlistUrl}
            variant="raised"
            color="primary"
            onClick={this.handleSaveEvent}
            className={classes.button}
          >
            <span className="control-btn-text-secondary">Create Event</span>
          </Button>
        </div>
      </React.Fragment>
    )
  }

  public renderThirdStep = () => {
    const { event, copyEventInvite } = this.props
    return (
      <React.Fragment>
        <ShareEvent copyEventInvite={copyEventInvite} event={event}/>
      </React.Fragment>
    )
  }

  public render() {
    const {
      shouldShowSavedDialogue,
    } = this.props

    if (shouldShowSavedDialogue) {
      showSavedDialogue()
    }

    return (
      <React.Fragment>
        <CreateEventSteps step={this.state.currentStep} />
        <form className="CreateEvent-root" noValidate={true} autoComplete="off">
          <Grid
            container={true}
            spacing={24}
            alignItems="center"
            direction="row"
          >
            {this.state.currentStep === 0 && this.renderFirstStep()}
            {this.state.currentStep === 1 && this.renderSecondStep()}
            {this.state.currentStep === 2 && this.renderThirdStep()}
          </Grid>
        </form>
      </React.Fragment>
    )
  }

  private handleCancel = (e: any) => {
    this.props.cancel()
  }

  private handleSaveEvent = (e: any) => {
    this.props.saveEvent(this.props.event)
    this.nextStep()
  }

  private handleContentUpdated = (key: string) => (content: any) => {
    const eventPart = {}
    eventPart[key] = content
    this.props.eventContentUpdated(eventPart)
  }
}

export default decorate(CreateEvent)