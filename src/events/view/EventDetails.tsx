import { Theme, WithStyles, withStyles } from 'material-ui/styles'
import * as React from 'react'
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
  </div>
)

export default withStyles(style, { withTheme: true })<IEventDetailsProps>(
  EventDetails
)
