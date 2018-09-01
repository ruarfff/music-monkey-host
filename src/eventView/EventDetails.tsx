import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper/Paper'
import Typography from '@material-ui/core/Typography/Typography'
import EditIcon from '@material-ui/icons/Edit'
import * as React from 'react'
import IEvent from '../event/IEvent'
import LinkButton from '../util/LinkButton'
import './EventDetails.css'

interface IEventDetailsProps {
  event: IEvent
}

const EventDetails: React.SFC<IEventDetailsProps> = ({
  event
}: IEventDetailsProps) => (
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
        container={true}
        item={true}
        spacing={16}
        xs={12}
      >
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

export default EventDetails
