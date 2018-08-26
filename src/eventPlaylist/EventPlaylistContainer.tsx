import { connect } from 'react-redux'
import IRootState from '../rootState'
import { resetStagedSuggestions } from '../suggestion/suggestionActions'
import EventPlaylist from './EventPlaylist'
import {
  moveItemInEventPlaylist,
  saveEventPlaylist
} from './eventPlaylistActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  playlist: state.eventPlaylist.playlist,
  saving: state.eventPlaylist.savingEventPlaylist,
  stagedSuggestions: state.suggestion.stagedSuggestions,
  votes: state.vote.votes
})

const mapDispatchToProps = {
  saveEventPlaylist,
  resetStagedSuggestions,
  onPlaylistDragDrop: moveItemInEventPlaylist
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPlaylist)

export default PreGameViewContainer
