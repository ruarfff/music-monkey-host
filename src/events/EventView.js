import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './EventView.css'

class EventView extends Component {
  componentDidMount() {
    this.props.getEventById(this.props.match.params.eventId)
  }

  render() {
    return (
      <div>
        <h1>Event Veiw!!!</h1>
      </div>
    )
  }
}

EventView.propTypes = {
  getEventById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

export default EventView
