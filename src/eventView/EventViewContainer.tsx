import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import IRootState from '../rootState'
import { getEventSuggestions } from '../suggestion/suggestionActions'
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
  acceptedSuggestionsByTrackUri: state.preGame.acceptedSuggestionsByTrackUri
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
      acknowledgeEventInviteCopied
    },
    dispatch
  )
})

const EventViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventView))

export default EventViewContainer
