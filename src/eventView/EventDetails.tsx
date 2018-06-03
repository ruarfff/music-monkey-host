import { Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'
import IEvent from '../event/IEvent'

interface IEventDetailsProps {
  event: IEvent
}

type PropsWithStyles = IEventDetailsProps & WithStyles<'root'>

const style = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit
  }
})

const EventDetails: React.SFC<PropsWithStyles> = ({
  event
}: PropsWithStyles) => (
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
  </Typography>
)

export default withStyles(style, { withTheme: true })<IEventDetailsProps>(
  EventDetails
)
