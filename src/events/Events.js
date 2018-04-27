import React, { Component, Fragment } from 'react'
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

import './Events.css'

const renderEventCreateAction = () => (
  <div className="Event-create-action-container">
    <Typography
      align="center"
      variant="headline"
      gutterBottom={true}
      className="Event-create-text"
    >
      Create New Event
    </Typography>
    <Link to="/create-event" className="Event-create-button">
      <Tooltip id="tooltip-fab" title="Create Event">
        <Button variant="fab" color="primary" aria-label="Create Event">
          <AddIcon />
        </Button>
      </Tooltip>
    </Link>
  </div>
)

class Events extends Component {
  render() {
    const { events } = this.props.events
    return (
      <div className="Events">
        {events.length < 1 ? (
          <NoEvents />
        ) : (
          <Fragment>
            {renderEventCreateAction()}
            <Grid
              container
              spacing={24}
              justify="center"
              alignItems="center"
              direction="row"
            >
              <Grid item sm={6} hidden={{ xsDown: true }}>
                <Typography
                  className="Events-list-caption"
                  align="center"
                  variant="headline"
                  gutterBottom
                >
                  Upcoming Events
                </Typography>
              </Grid>
              <Grid item sm={6} hidden={{ xsDown: true }}>
                <Typography
                  className="Events-list-caption"
                  align="center"
                  variant="headline"
                  gutterBottom
                >
                  Past Events
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} className="Events-upcoming">
                <Hidden smUp>
                  <Paper>
                    <Typography
                      className="Events-list-caption"
                      align="center"
                      variant="subheading"
                      gutterBottom
                    >
                      Upcoming Events
                    </Typography>
                  </Paper>
                </Hidden>

                <div className="Events-list">
                  {events.map((event, i) => <Event key={i} event={event} />)}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Hidden smUp>
                  <Paper>
                    <Typography
                      className="Events-list-caption"
                      align="center"
                      variant="subheading"
                      gutterBottom
                    >
                      Past Events
                    </Typography>
                  </Paper>
                </Hidden>

                <div className="Events-list">
                  <Typography
                    className="Events-list-caption"
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
  events: PropTypes.object.isRequired
}

export default Events
