import Divider from '@material-ui/core/Divider/Divider'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography/Typography'
import { map, sortBy } from 'lodash'
import * as moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import IUserState from '../user/IUserState'
import EventCard from './EventCard'
import './Events.css'
import IEvent from './IEvent'
import IEventState from './IEventState'
import NoEvents from './NoEvents'

interface IEventsProps {
  events: IEventState
  user: IUserState
  getEvents(): IAction
}

const renderEventsList = (events: IEvent[], noEventsMessage: string) => (
  <React.Fragment>
    {events.length < 1 && (
      <Typography
        className="eventsListCaption"
        align="center"
        variant="body2"
        gutterBottom={true}
      >
        {noEventsMessage}
      </Typography>
    )}

    <div className="eventsList">
      {map(
        sortBy(events, (event: IEvent) => event.startDateTime).reverse(),
        (event: IEvent) => (
          <EventCard key={event.eventId} event={event} />
        )
      )}
    </div>
  </React.Fragment>
)

class Events extends React.Component<IEventsProps> {
  public componentDidMount() {
    if (this.props.user.data) {
      this.props.getEvents()
    }
  }

  public render() {
    const { events, eventsLoading } = this.props.events
    const now = moment()
    let pastEvents: IEvent[] = []
    let upcomingEvents: IEvent[] = []
    if (!!events) {
      pastEvents = events.filter(event => event.startDateTime.isBefore(now))
      upcomingEvents = events.filter(event => event.startDateTime.isAfter(now))
    }

    return (
      <div className="events">
        {eventsLoading && <LoadingSpinner />}

        {!eventsLoading && (!events || events.length < 1) && <NoEvents />}

        {!eventsLoading &&
          !!events &&
          events.length > 0 && (
            <React.Fragment>
              <Grid container={true} spacing={24} direction="row">
                <Hidden xsDown={true}>
                  <Grid item={true} sm={12}>
                    <span
                      className="eventListTitle"
                    >
                      Upcoming Events
                    </span>
                    <Link
                      to={'/all-events'}
                      className="eventListShowAll"
                    >
                      View all events
                    </Link>
                  </Grid>
                </Hidden>

                <Grid item={true} xs={12} className="eventsRow">
                  <IconButton>
                    <img src={arrowLeft} alt="left"/>
                  </IconButton>

                  <Hidden smUp={true}>
                    <Typography
                      className="eventsListCaption"
                      variant="display1"
                      gutterBottom={true}
                    >
                      Upcoming Events
                    </Typography>
                  </Hidden>
                  {renderEventsList(upcomingEvents, 'No Upcoming Events')}
                  <IconButton>
                    <img src={arrowRight} alt="right"/>
                  </IconButton>
                </Grid>

                <Hidden xsDown={true}>
                  <Grid item={true} sm={12}>
                    <span
                      className="eventListTitle"
                    >
                      Past Events
                    </span>
                    <Link
                      to={'/all-events'}
                      className="eventListShowAll"
                    >
                      View all events
                    </Link>
                  </Grid>
                </Hidden>

                <Grid item={true} xs={12} className="eventsRow">
                  <IconButton>
                    <img src={arrowLeft} alt="left"/>
                  </IconButton>
                  <Hidden smUp={true}>
                    <Divider />
                    <Typography
                      className="eventsListCaption"
                      variant="display1"
                      gutterBottom={true}
                    >
                      Past Events
                    </Typography>
                  </Hidden>
                  {renderEventsList(pastEvents, 'No Past Events Yet')}
                  <IconButton>
                    <img src={arrowRight} alt="right"/>
                  </IconButton>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default Events
