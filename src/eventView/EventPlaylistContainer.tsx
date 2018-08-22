import { connect } from 'react-redux'
import IRootState from '../rootState'
import { resetStagedSuggestions } from '../suggestion/suggestionActions'
import EventPlaylist from './EventPlaylist'
import { saveEventPlaylist } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  saving: state.eventView.savingEventPlaylist,
  stagedSuggestions: state.suggestion.stagedSuggestions,
  votes: state.vote.votes
})

const mapDispatchToProps = {
  saveEventPlaylist,
  resetStagedSuggestions
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPlaylist)

export default PreGameViewContainer
