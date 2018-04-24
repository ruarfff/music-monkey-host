import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import AddIcon from '@material-ui/icons/Add'
import './Events.css'

class Events extends Component {
  render() {
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="add">
          <AddIcon />
        </Button>
      </div>
    )
  }
}

Events.propTypes = {}

export default Events
