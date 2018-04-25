import React, { Component } from 'react'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from 'material-ui/Tooltip'
import { Link } from 'react-router-dom'
import './Events.css'

class Events extends Component {
  render() {
    return (
      <div className="Events">
        <div className="Events-no-events-message">
          <h3>
            Looks like you have not createtd any events yet. Would you like to{' '}
            <Link to="/create-event">Create One</Link>?
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
    )
  }
}

Events.propTypes = {}

export default Events
