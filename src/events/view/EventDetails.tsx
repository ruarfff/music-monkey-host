import { Theme, WithStyles, withStyles } from 'material-ui/styles'
import * as React from 'react'
import IPlaylist from '../../playlists/IPlaylist'
import IEvent from '../IEvent'

interface IEventDetailsProps {
  event: IEvent
}

type PropsWithStyles = IEventDetailsProps & WithStyles<'root'>

const style = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit
  }
})

const renderPlaylist = (playlist?: IPlaylist) => {
  if (!playlist) {
    return <div />
  }

  return (
    <div>
      <h3>{playlist.name}</h3>
    </div>
  )
}

const EventDetails: React.SFC<PropsWithStyles> = ({
  event
}: PropsWithStyles) => (
  <div>
    {event.name}

    <p>{event.description}</p>
    <p>{event.startDateTime.format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
    <p>{event.endDateTime.format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
    <p>{event.eventCode}</p>
    <p>{event.location && event.location.address}</p>
    <p>{event.name}</p>
    <p>{event.organizer}</p>
    <p>{event.playlistUrl}</p>
    <p>{event.venue}</p>

    <p>{renderPlaylist(event.playlist)}</p>
  </div>
)

export default withStyles(style, { withTheme: true })<IEventDetailsProps>(
  EventDetails
)
