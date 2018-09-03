import { Grid } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Paper from '@material-ui/core/Paper/Paper'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography/Typography'
import EditIcon from '@material-ui/icons/Edit'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LinkButton from '../util/LinkButton'
import './EventDetails.css'

interface IEventDetailsProps {
  event: IEvent
  toggleDynamicVoting(event: IEvent): IAction
  toggleAutoAcceptSuggestions(event: IEvent): IAction
  toggleSuggestingPlaylists(event: IEvent): IAction
}

export default class EventDetails extends React.PureComponent<
  IEventDetailsProps
> {
  public render() {
    const { event }: IEventDetailsProps = this.props

    return (
      <Paper className="EventDetails-root">
        <Grid className="EventDetails-grid" container={true} spacing={8}>
          <Grid item={true} xs={12}>
            <Typography
              className="EventDetails-title"
              variant="headline"
              gutterBottom={true}
            >
              Event Details
            </Typography>
          </Grid>
          <Grid className="EventDetails-title-container" item={true} xs={6}>
            <img
              className="EventDetails-img"
              src={event.imageUrl}
              alt={event.name}
            />
          </Grid>

          <Grid className="EventDetails-info" item={true} xs={6}>
            <Typography variant="headline" gutterBottom={true}>
              {event.name}
            </Typography>

            <Typography variant="caption" gutterBottom={true}>
              Starting at:{' '}
              {event.startDateTime.format('dddd, MMMM Do YYYY, h:mm:ss a')}
            </Typography>

            {event.eventCode && (
              <Typography variant="body1" gutterBottom={true}>
                Event Code: {event.eventCode}
              </Typography>
            )}

            {event.location && (
              <Typography variant="body1" gutterBottom={true}>
                Location: {event.location.address}
              </Typography>
            )}

            {event.venue && (
              <Typography variant="body1" gutterBottom={true}>
                Venue: {event.venue}
              </Typography>
            )}
          </Grid>

          <Grid
            className="EventDetails-actions"
            justify="flex-end"
            direction="row"
            container={true}
            item={true}
            spacing={16}
            xs={12}
          >
            <Grid item={true}>
              <FormGroup row={true}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={event.settings.suggestingPlaylistsEnabled}
                      onChange={this.suggestingPlaylistsToggled}
                      value="suggestingPlaylistsEnabled"
                    />
                  }
                  label="Allow Playlist Suggestions"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={event.settings.autoAcceptSuggestionsEnabled}
                      onChange={this.autoAcceptSuggestionsToggled}
                      value="autoAcceptSuggestionsEnabled"
                    />
                  }
                  label="Auto Accept Suggestions"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={event.settings.dynamicVotingEnabled}
                      onChange={this.handleDynamicVotingToggled}
                      value="dynamicVotingEnabled"
                    />
                  }
                  label="Dynamic Voting"
                />
              </FormGroup>
            </Grid>
            <Grid item={true}>
              <LinkButton
                variant="raised"
                color="primary"
                to={location.pathname + '/edit'}
              >
                Edit Event
                <EditIcon />
              </LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }

  private handleDynamicVotingToggled = () => {
    const { event, toggleDynamicVoting } = this.props
    toggleDynamicVoting(event)
  }

  private autoAcceptSuggestionsToggled = () => {
    const { event, toggleAutoAcceptSuggestions } = this.props
    toggleAutoAcceptSuggestions(event)
  }

  private suggestingPlaylistsToggled = () => {
    const { event, toggleSuggestingPlaylists } = this.props
    toggleSuggestingPlaylists(event)
  }
}
