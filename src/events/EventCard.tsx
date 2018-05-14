import Card, { CardContent, CardHeader, CardMedia } from 'material-ui/Card'
import { Theme, withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import IEvent from './IEvent'

const decorate = withStyles((theme: Theme) => ({
  actions: {
    display: 'flex'
  },
  card: {
    marginTop: '2em',
    maxWidth: '16em',
    width: '16em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}))

interface IEventCardProps {
  event: IEvent
}

const EventCard = decorate<IEventCardProps>(({ classes, event }) => (
  <div>
    <Card className={classes.card}>
      <Link to={'/events/' + event.eventId}>
        <CardHeader
          subheader={
            event.startDateTime ? event.startDateTime.format('LLL') : ''
          }
        />
        <CardMedia
          className={classes.media}
          image={event.imageUrl}
          title="Event Image"
        />
      </Link>
      <CardContent>
        <Typography component="p" noWrap={true}>{event.location && event.location.address}</Typography>
      </CardContent>
    </Card>
  </div>
))

export default EventCard
