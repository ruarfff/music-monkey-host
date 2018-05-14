import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import { Link } from 'react-router-dom'

const styles = theme => ({
  eventsNoEventsMessage: {
    textAlign: 'center'
  }
})

const NoEvents = ({ classes }) => (
  <div className={classes.eventsNoEventsMessage}>
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

NoEvents.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NoEvents)
