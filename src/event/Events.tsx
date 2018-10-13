import Divider from '@material-ui/core/Divider/Divider'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography/Typography'
import * as _ from 'lodash'
import { map, sortBy } from 'lodash'
import * as moment from 'moment'
import Carousel from 'nuka-carousel'
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
import PlaylistCard from './PlaylistCardSmall'

interface IEventsProps {
  events: IEventState
  user: IUserState
  getEvents(): IAction
}

class Events extends React.Component<IEventsProps> {
  public componentDidMount() {
    if (this.props.user.data) {
      this.props.getEvents()
    }
  }

  public renderCarousel = (
    events: IEvent[],
    message: string,
    playlist: boolean
  ) => {
    const now = moment()

    let upcomingPlaylists: any[] = []

    if (!!events && playlist) {
      upcomingPlaylists = _.uniqBy(
        events
          .filter(event => event.startDateTime.isAfter(now))
          .map(event => event.playlist),
        'id'
      )
    }

    const leftControl = ({ previousSlide }: any) => (
      <IconButton onClick={previousSlide}>
        <img src={arrowLeft} alt="left" />
      </IconButton>
    )

    const rightControls = ({ nextSlide }: any) => (
      <IconButton onClick={nextSlide}>
        <img src={arrowRight} alt="right" />
      </IconButton>
    )

    return (
      <Carousel
        slidesToShow={4}
        slidesToScroll={1}
        renderCenterLeftControls={leftControl}
        renderCenterRightControls={rightControls}
      >
        {events.length > 0 &&
          !playlist &&
          map(
            sortBy(events, (event: IEvent) => event.startDateTime).reverse(),
            (event: IEvent) => <EventCard key={event.eventId} event={event} />
          )}
        {playlist &&
          upcomingPlaylists.map((upcomingPlaylist, index) => (
            <PlaylistCard key={index} playlist={upcomingPlaylist} />
          ))}
        {!events && (
          <Typography
            className="eventsListCaption"
            align="center"
            variant="body2"
            gutterBottom={true}
          >
            {message}
          </Typography>
        )}
      </Carousel>
    )
  }

  public render() {
    const { events, eventsLoading } = this.props.events
    const now = moment()
    let upcomingEvents: IEvent[] = []
    if (!!events) {
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
                    <span className="eventListTitle">Upcoming Events</span>
                    <Link to={'/all-events'} className="eventListShowAll">
                      View all events
                    </Link>
                  </Grid>
                </Hidden>

                <Grid item={true} xs={12} className="eventsRow">
                  <Hidden smUp={true}>
                    <Typography
                      className="eventsListCaption"
                      variant="display1"
                      gutterBottom={true}
                    >
                      Upcoming Events
                    </Typography>
                  </Hidden>
                  <div className="eventsList">
                    {this.renderCarousel(
                      upcomingEvents,
                      'No Upcoming events',
                      false
                    )}
                  </div>
                </Grid>

                <Hidden xsDown={true}>
                  <Grid item={true} sm={12}>
                    <span className="eventListTitle">Past Events</span>
                    <Link to={'/all-events'} className="eventListShowAll">
                      View all events
                    </Link>
                  </Grid>
                </Hidden>

                <Grid item={true} xs={12} className="eventsRow">
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
                  {this.renderCarousel(
                    upcomingEvents,
                    'No Upcoming Playlists',
                    true
                  )}
                </Grid>
              </Grid>
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default Events
