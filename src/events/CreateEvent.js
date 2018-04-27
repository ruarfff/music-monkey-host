import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { FormGroup, FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import { DateTimePicker } from 'material-ui-pickers'
import FileUpload from '../upload/FileUpload'
import LocationAutoComplete from '../location/LocationAutoComplete'
import Button from 'material-ui/Button'
import Delete from '@material-ui/icons/Delete'
import Save from '@material-ui/icons/Save'
import SweetAlert from 'sweetalert2-react'
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
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <InputLabel htmlFor="ce-event-name">Event Name</InputLabel>
            <Input
              id="ce-event-name"
              fullWidth={true}
              onChange={event =>
                eventContentUpdated({ name: event.target.value })
              }
            />
          </FormControl>
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <InputLabel htmlFor="ce-organizer">Organizer</InputLabel>
            <Input
              id="ce-organizer"
              onChange={event =>
                eventContentUpdated({ organizer: event.target.value })
              }
            />
          </FormControl>
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FileUpload
          onUpload={eventImageUploaded}
          onUploadError={eventImageUploadError}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <InputLabel htmlFor="ce-description">Description</InputLabel>
            <Input
              id="ce-description"
              onChange={event =>
                eventContentUpdated({ description: event.target.value })
              }
            />
          </FormControl>
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <InputLabel htmlFor="ce-venue">Venue</InputLabel>
            <Input
              id="ce-venue"
              onChange={event =>
                eventContentUpdated({ vanue: event.target.value })
              }
            />
          </FormControl>
        </FormGroup>
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
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <DateTimePicker
              id="ce-start-datetime"
              disablePast
              autoOk
              ampm={false}
              onChange={value => eventContentUpdated({ startDateTime: value })}
              label="Starting At"
            />
          </FormControl>
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <DateTimePicker
              id="ce-end-datetime"
              disablePast
              autoOk
              ampm={false}
              onChange={value => eventContentUpdated({ endDateTime: value })}
              label="Finishing At"
            />
          </FormControl>
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <InputLabel htmlFor="ce-eventcode">Event Code</InputLabel>
            <Input
              id="ce-eventcode"
              onChange={event =>
                eventContentUpdated({ eventCode: event.target.value })
              }
            />
          </FormControl>
        </FormGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormGroup row>
          <FormControl className={classes.formItem}>
            <InputLabel htmlFor="ce-playlist">Playlist</InputLabel>
            <Input
              id="ce-playlist"
              onChange={event =>
                eventContentUpdated({ playlist: event.target.value })
              }
            />
          </FormControl>
        </FormGroup>
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
        confirmButtonColor='#90a4ae'
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
