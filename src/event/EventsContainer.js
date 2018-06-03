import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getEvents } from './eventActions'
import Events from './Events'

const mapStateToProps = state => ({ events: state.events, user: state.user })

const mapDispatchToProps = { getEvents }

const EventsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Events)
)

export default EventsContainer
