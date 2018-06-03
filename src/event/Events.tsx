import Button from '@material-ui/core/Button/Button'
import Divider from '@material-ui/core/Divider/Divider'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import Typography from '@material-ui/core/Typography/Typography'
import AddIcon from '@material-ui/icons/Add'
import { map, sortBy } from 'lodash'
import * as moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
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
  getEvents(userId: string): IAction
}

const renderEventCreateAction = () => (
  <div className="eventCreateActionContainer">
    <Typography
      align="center"
      variant="headline"
      gutterBottom={true}
      className="eventCreateText"
    >
      Create New Event
    </Typography>
    <Link to="/create-event" className="eventCreateButton">
      <Tooltip id="tooltip-fab" title="Create Event">
        <Button variant="fab" color="primary" aria-label="Create Event">
          <AddIcon />
        </Button>
      </Tooltip>
    </Link>
  </div>
)

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
        (event: IEvent) => <EventCard key={event.eventId} event={event} />
      )}
    </div>
  </React.Fragment>
)

class Events extends React.Component<IEventsProps> {
  public componentDidMount() {
    if (this.props.user.data) {
      this.props.getEvents(this.props.user.data.userId)
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
              {renderEventCreateAction()}
              <Grid container={true} spacing={24} direction="row">
                <Hidden xsDown={true}>
                  <Grid item={true} sm={6}>
                    <Typography
                      className="eventsListCaption"
                      align="center"
                      variant="headline"
                      gutterBottom={true}
                    >
                      Upcoming Events
                    </Typography>
                  </Grid>
                </Hidden>
                <Hidden xsDown={true}>
                  <Grid item={true} sm={6}>
                    <Typography
                      className="eventsListCaption"
                      align="center"
                      variant="headline"
                      gutterBottom={true}
                    >
                      Past Events
                    </Typography>
                  </Grid>
                </Hidden>
                <Grid item={true} xs={12} sm={6} className="eventsUpcoming">
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
                </Grid>
                <Grid item={true} xs={12} sm={6}>
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
                </Grid>
              </Grid>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default Events
