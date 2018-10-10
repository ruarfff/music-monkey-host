import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EventInput from '../components/EventInput/EventInput'
import LocationAutoComplete from '../components/location/LocationAutoComplete'
import MapComponent from '../components/MapComponent'
import IEvent from '../event/IEvent'
import IPlaylistInput from '../event/IPlaylistInput'
import IAction from '../IAction'
import IPlaylist from '../playlist/IPlaylist'
import IPlaylistDetails from '../playlist/IPlaylistDetails'
import FileUpload from '../upload/FileUpload'
import IUser from '../user/IUser'
import './CreateEvent.css'
import CreateEventSteps from './CreateEventSteps'
import EventDateTimePicker from './EventDateTimePicker'
import PlaylistSelection from './PlaylistSelection'
import ShareEvent from './ShareEvent'

const decorate = withStyles((theme: Theme) => ({
  button: {
    marginRight: '30px',
    '&:last-child': {
      marginRight: 0,
    }
  },
  addCoHost: {
    marginTop: '10px'
  },
  dropDown: {
    display: 'inline-block',
    marginTop: '20px',
    borderRadius: '4px',
    border: '1px solid #979797',
    paddingLeft: '16px',
    minHeight: '40px',
    // position: 'relative',
    marginRight: '20px',
    top: '8px',
    '&:hover:not($disabled):before': {
      borderBottom: '1px solid #979797!important',
    },
    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
    }
  },
  codeInput: {
    display: 'inline-block',
  }
}))

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

class CreateEvent extends React.PureComponent<ICreateEventProps & WithStyles> {

  public state = {
    currentStep: 0,
    anchorCoHost: null,
    eventType: 'public',
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


  public handleClick = ( event: any ) => {
    this.setState({ anchorCoHost: event.currentTarget })
  }

  public handleClose = () => {
    this.setState({ anchorCoHost: null })
  }

  public handleEventType = ( event: any ) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  public renderMap = (coords: any) => {
    return (
      <MapComponent
        coords={coords}
      />
    )
  }

  public renderFirstStep = () =>  {
    const { anchorCoHost } = this.state

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
            error={!event.name}
            errorLabel={'Required'}
          />
          <EventInput
            label={'Event description'}
            maxRows={11}
            value={event.description || ''}
            error={!event.description}
            errorLabel={'Required'}
            onChange={this.handleContentUpdated('description')}
          />
        </Grid>

        <Grid item={true} xs={12} sm={6}>
          <FileUpload
            onUpload={eventImageUploaded}
            onUploadError={eventImageUploadError}
          />
          <Button
            className={classes.addCoHost}
            variant="raised"
            color="secondary"
            aria-owns={anchorCoHost ? 'simple-menu' : ''}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            ADD CO-HOST
          </Button>
          <Menu
            anchorEl={anchorCoHost}
            open={Boolean(anchorCoHost)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Select from friends</MenuItem>
            <MenuItem onClick={this.handleClose}>Email link</MenuItem>
          </Menu>
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <EventInput
            label={'Organizer'}
            placeholder={'Who is organising this event?'}
            value={event.organizer}
            error={!event.organizer}
            errorLabel={'Required'}
            onChange={this.handleContentUpdated('organizer')}
          />
          <Select
            className={classes.dropDown}
            value={this.state.eventType}
            onChange={this.handleEventType}
            inputProps={{name: 'eventType'}}
          >
            <MenuItem value={'public'}>Public</MenuItem>
            <MenuItem value={'private'}>Private</MenuItem>
          </Select>
          <div className={classes.codeInput}>
            <EventInput
              value={event.eventCode ? event.eventCode : ''}
              placeholder={'set password'}
              label={'event code'}
              onChange={this.handleContentUpdated('eventCode')}
            />
          </div>

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
            placeholder={''}
            error={!event.venue}
            errorLabel={'Required'}
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
            disabled={
              !event.name ||
              !event.organizer ||
              !event.description ||
              !event.playlistUrl ||
              !event.venue
            }
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