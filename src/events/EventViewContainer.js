import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getEventById } from './eventActions'
import EventView from './EventView'

const mapStateToProps = state => ({ event: state.events.selectedEvent })

const mapDispatchToProps = { getEventById }

const EventViewContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventView)
)

export default EventViewContainer
