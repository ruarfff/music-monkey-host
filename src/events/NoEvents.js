import React from 'react'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from 'material-ui/Tooltip'
import { Link } from 'react-router-dom'
import './Events.css'

const NoEvents = () => (
  <div className="Events-no-events-message">
    <div>
      <h3>
        Looks like you have not created any events yet. Would you like to{' '}
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

export default NoEvents
