import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from 'material-ui/Tooltip'
import { Link } from 'react-router-dom'
import Hidden from 'material-ui/Hidden'
import Paper from 'material-ui/Paper'
import NoEvents from './NoEvents'
import EventCard from './EventCard'
import * as moment from 'moment'
import LoadingSpinner from '../loading/LoadingSpinner'

const styles = theme => ({
  eventCreateActionContainer: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    paddingBottom: '2em'
  },
  eventCreateButton: {
    float: 'right',
    margin: '1em',
    textAlign: 'center'
  },
  eventCreateText: {
    float: 'left',
    margin: '1em',
    textAlign: 'center'
  },
  events: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1.5em',
    width: '100%'
  },
  eventsList: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    marginTop: '4em'
  },
  eventsListCaption: {
    textAlign: 'center',
    width: '100%'
  },
  eventsUpcoming: {
    borderRight: '1px solid'
  }
})

const renderEventCreateAction = classes => (
  <div className={classes.eventCreateActionContainer}>
    <Typography
      align="center"
      variant="headline"
      gutterBottom={true}
      className={classes.eventCreateText}
    >
      Create New Event
    </Typography>
    <Link to="/create-event" className={classes.eventCreateButton}>
      <Tooltip id="tooltip-fab" title="Create Event">
        <Button variant="fab" color="primary" aria-label="Create Event">
          <AddIcon />
        </Button>
      </Tooltip>
    </Link>
  </div>
)

const renderEventsList = (classes, events, noEventsMessage) => (
  <Fragment>
    {events.length < 1 && (
      <Typography
        className={classes.eventsListCaption}
        align="center"
        variant="body2"
        gutterBottom
      >
        {noEventsMessage}
      </Typography>
    )}

    <div className={classes.eventsList}>
      {events.map((event, i) => <EventCard key={i} event={event} />)}
    </div>
  </Fragment>
)

class Events extends Component {
  componentDidMount() {
    if (this.props.user.data) {
      this.props.getEvents(this.props.user.data.userId)
    }
  }

  render() {
    const { events, eventsLoading } = this.props.events
    const now = moment()
    const pastEvents = events.filter(event => event.startDateTime.isBefore(now))
    const upcomingEvents = events.filter(event =>
      event.startDateTime.isAfter(now)
    )

    const classes = this.props.classes

    return (
      <div className={classes.events}>
        {eventsLoading && <LoadingSpinner />}
        {!eventsLoading && events.length < 1 && <NoEvents />}

        {!eventsLoading &&
          events.length > 0 && (
            <Fragment>
              {renderEventCreateAction(classes)}
              <Grid
                container
                spacing={24}
                justify="center"
                alignItems="center"
                direction="row"
              >
                <Grid item sm={6} hidden={{ xsDown: true }}>
                  <Typography
                    className={classes.eventsListCaption}
                    align="center"
                    variant="headline"
                    gutterBottom
                  >
                    Upcoming Events
                  </Typography>
                </Grid>
                <Grid item sm={6} hidden={{ xsDown: true }}>
                  <Typography
                    className={classes.eventsListCaption}
                    align="center"
                    variant="headline"
                    gutterBottom
                  >
                    Past Events
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.eventsUpcoming}>
                  <Hidden smUp>
                    <Paper>
                      <Typography
                        className={classes.eventsListCaption}
                        align="center"
                        variant="subheading"
                        gutterBottom
                      >
                        Upcoming Events
                      </Typography>
                    </Paper>
                  </Hidden>
                  {renderEventsList(
                    classes,
                    upcomingEvents,
                    'No Upcoming Events'
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Hidden smUp>
                    <Paper>
                      <Typography
                        className={classes.eventsListCaption}
                        align="center"
                        variant="subheading"
                        gutterBottom
                      >
                        Past Events
                      </Typography>
                    </Paper>
                  </Hidden>
                  {renderEventsList(classes, pastEvents, 'No Past Events Yet')}
                </Grid>
              </Grid>
            </Fragment>
          )}
      </div>
    )
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Events)
