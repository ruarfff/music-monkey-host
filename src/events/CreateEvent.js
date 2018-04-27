import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { DateTimePicker } from 'material-ui-pickers'
import FileUpload from '../upload/FileUpload'
import LocationAutoComplete from '../location/LocationAutoComplete'
import Button from 'material-ui/Button'
import Delete from '@material-ui/icons/Delete'
import Save from '@material-ui/icons/Save'
import SweetAlert from 'sweetalert2-react'
import TextField from 'material-ui/TextField'
import './CreateEvent.css'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  formItem: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

const CreateEvent = ({
  events,
  classes,
  locationChanged,
  locationSelected,
  eventContentUpdated,
  eventImageUploaded,
  eventImageUploadError,
  eventSaved,
  cancel
}) => (
  <form className={classes.root} noValidate autoComplete="off">
    <Grid
      container
      spacing={24}
      justify="center"
      alignItems="center"
      direction="row"
    >
      <Grid item xs={12} sm={6}>
        <TextField
          label="Event Name"
          placeholder="Provide a name for your event"
          required
          autoFocus
          fullWidth
          margin="normal"
          value={events.savingEvent.name}
          onChange={event => eventContentUpdated({ name: event.target.value })}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Organizer"
          placeholder="Who is organising this event?"
          required
          fullWidth
          margin="normal"
          value={events.savingEvent.organizer}
          onChange={event =>
            eventContentUpdated({ organizer: event.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FileUpload
          onUpload={eventImageUploaded}
          onUploadError={eventImageUploadError}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Event description"
          multiline
          fullWidth
          margin="normal"
          rowsMax="4"
          value={events.savingEvent.description}
          onChange={event =>
            eventContentUpdated({ description: event.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Venue"
          fullWidth
          margin="normal"
          value={events.savingEvent.venue}
          onChange={event => eventContentUpdated({ venue: event.target.value })}
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
          id="ce-start-datetime"
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
          id="ce-end-datetime"
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
        <TextField
          label="Event Code"
          placeholder="Optionally password protect event"
          fullWidth
          margin="normal"
          value={events.savingEvent.eventCode}
          onChange={event =>
            eventContentUpdated({ eventCode: event.target.value })
          }
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Spotify Playlist"
          placeholder="Enter Spotify Playlist URL"
          fullWidth
          margin="normal"
          value={events.savingEvent.playlist}
          onChange={event =>
            eventContentUpdated({ playlist: event.target.value })
          }
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
        className={classes.button}
        variant="raised"
        color="primary"
        onClick={() => {
          eventSaved()
        }}
      >
        Save
        <Save className={classes.rightIcon} />
      </Button>

      <SweetAlert
        show={events.showSavedDialogue}
        title="Event Saved!"
        confirmButtonColor="#00838F"
        onConfirm={() => {
          cancel()
        }}
      />
    </div>
  </form>
)

CreateEvent.propTypes = {
  events: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  locationChanged: PropTypes.func.isRequired,
  locationSelected: PropTypes.func.isRequired,
  eventContentUpdated: PropTypes.func.isRequired,
  eventImageUploaded: PropTypes.func.isRequired,
  eventImageUploadError: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  eventSaved: PropTypes.func.isRequired
}

export default withStyles(styles)(CreateEvent)
