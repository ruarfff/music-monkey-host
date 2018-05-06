import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getEventById } from './eventActions'
import EventView from './EventView'

const mapStateToProps = state => ({
  error: state.events.errors.fetchEvent,
  event: state.events.selectedEvent,
  loading: state.events.eventLoading
})

const mapDispatchToProps = { getEventById }

const EventViewContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventView)
)

export default EventViewContainer
