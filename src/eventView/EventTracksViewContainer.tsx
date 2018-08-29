import { connect } from 'react-redux'
import IRootState from '../rootState'
import { getEventSuggestions } from '../suggestion/suggestionActions'
import { fetchEventVotes } from '../vote/voteActions'
import EventTracksView from './EventTracksView'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  acceptedSuggestions: state.suggestion.acceptedSuggestions,
  stagedSuggestions: state.suggestion.stagedSuggestions,
  pendingSuggestions: state.suggestion.pendingSuggestions
})

const mapDispatchToProps = {
  getEventSuggestions,
  fetchEventVotes
}

const EventTracksViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventTracksView)

export default EventTracksViewContainer
