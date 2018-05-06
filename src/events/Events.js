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
import Event from './Event'

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

const renderEventCreateAction = (classes) => (
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

class Events extends Component {
  componentDidMount() {
    if (this.props.user.data) {
      this.props.getEvents(this.props.user.data.userId)
    }
  }

  render() {
    const { events } = this.props.events
    const classes = this.props.classes

    return (
      <div className={classes.events}>
        {events.length < 1 ? (
          <NoEvents />
        ) : (
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

                <div className={classes.eventsList}>
                  {events.map((event, i) => <Event key={i} event={event} />)}
                </div>
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

                <div className={classes.eventsList}>
                  <Typography
                    className={classes.eventsListCaption}
                    align="center"
                    variant="body2"
                    gutterBottom
                  >
                    No Past Events Yet
                  </Typography>
                </div>
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

export default withStyles(styles)(Events)
