import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import IRootState from '../rootState'
import EventView from './EventView'
import {
  ackowledgeEventInviteCopied,
  copyEventInvite,
  deleteEvent,
  getEventById,
  onEventDeleteClosed,
  onEventDeleteSelected
} from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  error: state.eventView.fetchError,
  event: state.eventView.event,
  loading: state.eventView.loading,
  deleteSelected: state.eventView.deleteSelected,
  deleteSuccess: state.eventView.deleteSucceeded,
  deleteFailed: state.eventView.deleteFailed,
  copiedToClipboard: state.eventView.copiedToClipboard
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDeleteAknowledged: () => {
    dispatch(push('/'))
  },
  ...bindActionCreators(
    {
      deleteEvent,
      getEventById,
      onEventDeleteSelected,
      onEventDeleteClosed,
      copyEventInvite,
      ackowledgeEventInviteCopied
    },
    dispatch
  )
})

const EventViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventView))

export default EventViewContainer
