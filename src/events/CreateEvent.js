import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { FormGroup, FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import { DateTimePicker } from 'material-ui-pickers'
import FileUpload from '../upload/FileUpload'
import LocationAutoComplete from '../location/LocationAutoComplete'
import './CreateEvent.css'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  formItem: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  }
})

class CreateEvent extends Component {
  
  render() {
    const { classes } = this.props

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
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <InputLabel htmlFor="ce-event-name">Event Name</InputLabel>
                <Input id="ce-event-name" onChange={() => {}} />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <InputLabel htmlFor="ce-organizer">Organizer</InputLabel>
                <Input id="ce-organizer" onChange={() => {}} />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FileUpload />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <InputLabel htmlFor="ce-description">Description</InputLabel>
                <Input id="ce-description" onChange={() => {}} />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <InputLabel htmlFor="ce-venue">Venue</InputLabel>
                <Input id="ce-venue" onChange={() => {}} />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocationAutoComplete onSelect={() => {}} onChange={() => {}} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <DateTimePicker
                  id="ce-start-datetime"
                  disablePast
                  autoOk
                  ampm={false}
                  onChange={() => {}}
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
                  onChange={() => {}}
                  label="Finishing At"
                />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <InputLabel htmlFor="ce-eventcode">Event Code</InputLabel>
                <Input id="ce-eventcode" onChange={() => {}} />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormGroup row>
              <FormControl className={classes.formItem}>
                <InputLabel htmlFor="ce-playlist">Playlist</InputLabel>
                <Input id="ce-playlist" onChange={() => {}} />
              </FormControl>
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    )
  }
}

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CreateEvent)
