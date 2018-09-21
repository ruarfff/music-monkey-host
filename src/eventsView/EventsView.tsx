import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import Typography from '@material-ui/core/Typography/Typography'
import { History } from 'history'
import { map, sortBy } from 'lodash'
import * as moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
import IEvent from '../event/IEvent'
import IEventState from '../event/IEventState'
import NoEvents from '../event/NoEvents'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import IUserState from '../user/IUserState'
import EventBigCard from './EventBigCard'

interface IEventsProps {
  events: IEventState
  user: IUserState
  history: History
  getEvents(): IAction
}

class EventsView extends React.Component<IEventsProps> {
  public componentDidMount() {
    if (this.props.user) {
      this.props.getEvents()
    }
  }

  public renderEventsList = (events: IEvent[], noEventsMessage: string) => (
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
            <EventBigCard key={event.eventId} event={event} />
          )
        )}
      </div>
    </React.Fragment>
  )

  public render() {
    const { history } = this.props
    const { events, eventsLoading } = this.props.events
    const currentPath = history.location.pathname

    const now = moment()

    let allEvents: IEvent[] = []
    let pastEvents: IEvent[] = []
    let upcomingEvents: IEvent[] = []

    if (!!events) {
      pastEvents = events.filter(event => event.startDateTime.isBefore(now))
      upcomingEvents = events.filter(event => event.startDateTime.isAfter(now))
      allEvents = events.filter(event => event)
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
                  <Link to='/all-events'>
                    <Button
                      variant='text'
                      color={currentPath === '/all-events' ? 'primary' : 'secondary'}
                    >
                      ALL
                    </Button>
                  </Link>
                  <Link to='/past-events'>
                    <Button
                      variant='text'
                      color={currentPath === '/past-events' ? 'primary' : 'secondary'}
                    >
                      PAST EVENTS
                    </Button>
                  </Link>
                  <Link to='/upcoming-events'>
                    <Button
                      variant='text'
                      color={currentPath === '/upcoming-events' ? 'primary' : 'secondary'}
                    >
                      UPCOMING EVENTS
                    </Button>
                  </Link>
                </Grid>
              </Hidden>
              <Grid item={true} md={12}>
                {currentPath === '/all-events' && this.renderEventsList(allEvents, 'no events')}
                {currentPath === '/past-events' && this.renderEventsList(pastEvents, 'no events')}
                {currentPath === '/upcoming-events' && this.renderEventsList(upcomingEvents, 'no events')}
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default EventsView
