import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import { Theme } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react'
import { Link } from 'react-router-dom'
import IEvent from './IEvent'

const decorate = withStyles((theme: Theme) => ({
  actions: {
    display: 'flex'
  },
  card: {
    height: '16em',
    marginTop: '1em',
    marginLeft: '1em',
    marginRight: '1em',
    maxWidth: '14em',
    width: '14em'
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
  <Card className={classes.card}>
    <Link to={'/events/' + event.eventId}>
      <CardHeader
        subheader={event.startDateTime ? event.startDateTime.format('LLL') : ''}
      />
      <CardMedia
        className={classes.media}
        image={event.imageUrl}
        title="Event Image"
      />
    </Link>
    <CardContent>
      <Typography component="p" noWrap={true}>
        {event.location && event.location.address}
      </Typography>
    </CardContent>
  </Card>
))

export default EventCard
