import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../../rootState'
import EventView from './EventView'
import { getEventById } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  error: state.eventView.fetchError,
  event: state.eventView.event,
  loading: state.eventView.loading
})

const mapDispatchToProps = { getEventById }

const EventViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventView) as any)

export default EventViewContainer
