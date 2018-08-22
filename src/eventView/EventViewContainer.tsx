import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import IRootState from '../rootState'
import { getEventSuggestions } from '../suggestion/suggestionActions'
import { fetchEventVotes } from '../vote/voteActions'
import EventView from './EventView'
import {
  acknowledgeEventInviteCopied,
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
  copiedToClipboard: state.eventView.copiedToClipboard,
  acceptedSuggestions: state.suggestion.acceptedSuggestions,
  stagedSuggestions: state.suggestion.stagedSuggestions,
  pendingSuggestions: state.suggestion.pendingSuggestions
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDeleteAcknowledged: () => {
    dispatch(push('/'))
  },
  ...bindActionCreators(
    {
      deleteEvent,
      getEventById,
      getEventSuggestions,
      onEventDeleteSelected,
      onEventDeleteClosed,
      copyEventInvite,
      acknowledgeEventInviteCopied,
      fetchEventVotes
    },
    dispatch
  )
})

const EventViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventView))

export default EventViewContainer
