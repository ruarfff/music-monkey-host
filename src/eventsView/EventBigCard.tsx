import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card/Card'
import { Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import eventIcon from '../assets/event-date-icon.svg'
import IEvent from '../event/IEvent'

const decorate = withStyles((theme: Theme) => ({
  actions: {
    display: 'flex'
  },
  card: {
    height: '150px',
    marginTop: '1em',
    marginLeft: '1em',
    marginRight: '1em',
    width: '200px',
    paddingLeft: '15px',
    paddingTop: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  link: {
    textDecoration: 'none',
  },
  timeTitle: {
    color: '#979797',
    fontSize: '12px',
    lineHeight: '16px',
    marginBottom: '8px',
  },
  timeTitleBig: {
    fintSize: '16px',
    lineHeight: '24px',
    color: 'black',
    fontFamily: 'Roboto, sans-sarif',
  },
  eventName: {
    color: '#979797',
    fontSize: '12px',
    lineHeight: '16px',
    fontWight: 600,
  },
  eventDescription: {
    color: '#979797',
    fontSize: '12px',
    lineHeight: '16px',
    marginBottom: '4px'
  },
  avatar: {
    width: '30px',
    height: '30px',
    fontSize: '10px',
  }
}))

type IEventCardClasses =
  'actions' |
  'card' |
  'media' |
  'title' |
  'link' |
  'timeTitle' |
  'timeTitleBig' |
  'eventName' |
  'eventDescription' |
  'avatar'

interface IEventBigCardProps {
  event: IEvent,
}


class EventBigCard extends React.Component<
  IEventBigCardProps &
  WithStyles<IEventCardClasses>
  > {
  public render() {
    const {event, classes} = this.props
    return (
      <Card className={classes.card}>
        <Link to={'/events/' + event.eventId} className={classes.link}>
          <Typography className={classes.timeTitle}>
            <img src={eventIcon} alt="" className="eventCardIcon"/>
            {event.startDateTime ? event.startDateTime.format('LT') : ''}
          </Typography>
          <Typography className={classes.timeTitleBig}>
            {event.startDateTime ? event.startDateTime.format('dddd, MMMM Do') : ''}
          </Typography>
          <Typography className={classes.eventName}>
            {event.name && event.name}
          </Typography>

          <Typography noWrap={true} className={classes.eventDescription}>
            {event.location && event.location.address}
          </Typography>

          <Avatar className={classes.avatar}>
            +{event.guests && event.guests.length}
          </Avatar>
        </Link>
      </Card>
    )
  }
}

export default decorate(EventBigCard)