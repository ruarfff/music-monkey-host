import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from 'material-ui/Tooltip'
import { Link } from 'react-router-dom'
import './Events.css'

class Events extends Component {
  componentDidCatch(error, info) {}

  render() {
    const { events } = this.props.events
    return (
      <div className="Events">
        {events.length < 1 ? (
          <div>
            <div className="Events-no-events-message">
              <h3>
                Looks like you have not created any events yet. Would you like
                to <Link to="/create-event">Create One</Link>?
              </h3>
            </div>
            <Link to="/create-event">
              <Tooltip id="tooltip-fab" title="Create Event">
                <Button variant="fab" color="primary" aria-label="Create Event">
                  <AddIcon />
                </Button>
              </Tooltip>
            </Link>
          </div>
        ) : (
          <h1>Has Events!!!</h1>
        )}
      </div>
    )
  }
}

Events.propTypes = {
  events: PropTypes.object.isRequired
}

export default Events
