import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import { DateTimePicker } from 'material-ui-pickers'
import Button from '@material-ui/core/Button'
import Delete from '@material-ui/icons/Delete'
import Save from '@material-ui/icons/Save'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TextField from '@material-ui/core/TextField/TextField'

import FileUpload from '../upload/FileUpload'
import LocationAutoComplete from '../location/LocationAutoComplete'
import EventNameInput from './EventNameInput'
import EventOrganizerInput from './EventOrganizerInput'
import EventDescriptionInput from './EventDescriptionInput'
import EventVenueInput from './EventVenueInput'
import EventCodeInput from './EventCodeInput'
import PlaylistSelection from './PlaylistSelection'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  formItem: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: '100%'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  }
})

const showSavedDialogue = onCancel => {
  const MySwal = withReactContent(Swal)

  MySwal.fire({
    confirmButtonColor: '#00838F',
    title: 'Event Saved!',
    type: 'success'
  }).then(onCancel)
}

class CreateEvent extends Component {
  componentDidMount() {
    this.props.initializeCreateForm(
      this.props.events.savingEvent,
      this.props.user.data
    )
  }

  render() {
    const {
      cancel,
      classes,
      closeExistingPlaylist,
      closeCreatePlaylist,
      createEventPlaylist,
      eventContentUpdated,
      eventImageUploaded,
      eventImageUploadError,
      events,
      locationChanged,
      locationSelected,
      saveEvent,
      selectCreatePlaylist,
      selectExistingPlaylist,
      user
    } = this.props

    if (events.showSavedDialogue) {
      showSavedDialogue(cancel)
    }

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <Grid
          container
          spacing={24}
          justify="center"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={12} sm={6}>
            <EventNameInput
              value={events.savingEvent.name}
              onChange={name => eventContentUpdated({ name })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <EventOrganizerInput
              value={events.savingEvent.organizer}
              onChange={organizer => eventContentUpdated({ organizer })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FileUpload
              onUpload={eventImageUploaded}
              onUploadError={eventImageUploadError}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <EventDescriptionInput
              value={events.savingEvent.description}
              onChange={description => eventContentUpdated({ description })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <EventVenueInput
              value={events.savingEvent.venue}
              onChange={venue => eventContentUpdated({ venue })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocationAutoComplete
              value={events.savingEvent.location.address}
              onSelect={locationSelected}
              onChange={locationChanged}
              placeholder="Search for place"
              formClass={classes.formItem}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DateTimePicker
              disablePast
              autoOk
              fullWidth
              ampm={false}
              value={events.savingEvent.startDateTime}
              onChange={value => eventContentUpdated({ startDateTime: value })}
              label="Starting At"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DateTimePicker
              disablePast
              autoOk
              fullWidth
              ampm={false}
              value={events.savingEvent.endDateTime}
              onChange={value => eventContentUpdated({ endDateTime: value })}
              label="Finishing At"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <EventCodeInput
              value={events.savingEvent.eventCode}
              onChange={eventCode => eventContentUpdated({ eventCode })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <PlaylistSelection
              user={user.data}
              value={events.savingEvent.playlistUrl}
              onPlaylistAdded={playlistUrl =>
                eventContentUpdated({ playlistUrl })
              }
              playlistInput={events.playlistInput}
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
            className={classes.button}
            variant="raised"
            color="secondary"
            onClick={() => {
              cancel()
            }}
          >
            Cancel
            <Delete className={classes.rightIcon} />
          </Button>
          <Button
            disabled={
              !events.savingEvent.name ||
              !events.savingEvent.organizer ||
              !events.savingEvent.playlistUrl
            }
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={() => {
              saveEvent(events.savingEvent)
            }}
          >
            Save
            <Save className={classes.rightIcon} />
          </Button>
        </div>
      </form>
    )
  }
}

CreateEvent.propTypes = {
  cancel: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  closeCreatePlaylist: PropTypes.func.isRequired,
  closeExistingPlaylist: PropTypes.func.isRequired,
  createEventPlaylist: PropTypes.func.isRequired,
  eventContentUpdated: PropTypes.func.isRequired,
  eventImageUploadError: PropTypes.func.isRequired,
  eventImageUploaded: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  initializeCreateForm: PropTypes.func.isRequired,
  locationChanged: PropTypes.func.isRequired,
  locationSelected: PropTypes.func.isRequired,
  saveEvent: PropTypes.func.isRequired,
  selectCreatePlaylist: PropTypes.func.isRequired,
  selectExistingPlaylist: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(CreateEvent)
