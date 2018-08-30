import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import IRootState from '../rootState'
import EventSummaryView from './EventSummaryView'
import {
  deleteEvent,
  onEventDeleteClosed,
  onEventDeleteSelected
} from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  deleteSelected: state.eventView.deleteSelected,
  deleteSuccess: state.eventView.deleteSucceeded,
  deleteFailed: state.eventView.deleteFailed
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDeleteAcknowledged: () => {
    dispatch(push('/'))
  },
  ...bindActionCreators(
    {
      deleteEvent,
      onEventDeleteSelected,
      onEventDeleteClosed
    },
    dispatch
  )
})

const EventSummaryViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSummaryView)

export default EventSummaryViewContainer
