import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../../rootState'
import EventView from './EventView'
import {
  getEventById,
  onEventDeleteClosed,
  onEventDeleteSelected,
  onEventTabIndexChange
} from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  error: state.eventView.fetchError,
  event: state.eventView.event,
  loading: state.eventView.loading,
  eventTabIndex: state.eventView.eventTabIndex,
  deleteSelected: state.eventView.deleteSelected
})

const mapDispatchToProps = {
  getEventById,
  onEventTabIndexChange,
  onEventDeleteSelected,
  onEventDeleteClosed
}

const EventViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventView) as any)

export default EventViewContainer
