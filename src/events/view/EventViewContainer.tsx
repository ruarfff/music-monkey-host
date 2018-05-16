import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import IRootState from '../../rootState'
import EventView from './EventView'
import {
  ackowledgeEventInviteCopied,
  copyEventInvite,
  deleteEvent,
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
      onEventTabIndexChange,
      onEventDeleteSelected,
      onEventDeleteClosed,
      copyEventInvite,
      ackowledgeEventInviteCopied
    },
    dispatch
  )
})

const EventViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventView) as any)

export default EventViewContainer
