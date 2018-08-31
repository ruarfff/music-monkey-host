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
  <Typography component="div">
    <Typography variant="display3" gutterBottom={true}>
      {event.name}
    </Typography>

    <Typography variant="headline" gutterBottom={true}>
      Organizer: {event.organizer}
    </Typography>

    <Typography variant="headline" gutterBottom={true}>
      Description: {event.description}
    </Typography>

    <Typography variant="caption" gutterBottom={true}>
      Starting at: {event.startDateTime.format('dddd, MMMM Do YYYY, h:mm:ss a')}
    </Typography>

    <Typography variant="caption" gutterBottom={true}>
      Ending at: {event.endDateTime.format('dddd, MMMM Do YYYY, h:mm:ss a')}
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

    <Typography variant="body1" gutterBottom={true}>
      Playlist:{' '}
      <a href={event.playlistUrl} target="_blank">
        Open in Spotify
      </a>
    </Typography>
    <LinkButton
      variant="raised"
      color="primary"
      to={location.pathname + '/edit'}
    >
      Edit
      <EditIcon />
    </LinkButton>
  </Typography>
)

export default EventDetails
