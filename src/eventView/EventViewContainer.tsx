import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getEventByIdNoLoading } from '../eventView/eventViewActions'
import IRootState from '../rootState'
import { getEventSuggestions } from '../suggestion/suggestionActions'
import { fetchEventVotes } from '../vote/voteActions'
import EventView from './EventView'
import {
  acknowledgeEventInviteCopied,
  copyEventInvite,
  getEventById
} from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  error: state.eventView.fetchError,
  event: state.eventView.event,
  loading: state.eventView.loading,
  copiedToClipboard: state.eventView.copiedToClipboard
})

const mapDispatchToProps = {
  getEventById,
  copyEventInvite,
  acknowledgeEventInviteCopied,
  getEventSuggestions,
  fetchEventVotes,
  getEventByIdNoLoading
}

const EventViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventView))

export default EventViewContainer
