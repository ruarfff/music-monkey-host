import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../rootState'
import { getEventSuggestions } from '../suggestion/suggestionActions'
import {
  acceptSuggestedTracks,
  onPreGameTabIndexChange,
  resetUnsavedPlaylist,
  savePreGamePlaylist
} from './pregameActions'
import PreGameView from './PreGameView'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  preGameTabIndex: state.preGame.preGameTabIndex,
  suggestions: state.suggestion.pendingSuggestions,
  saving: state.preGame.saving,
  acceptedSuggestionsByTrackUri: state.preGame.acceptedSuggestionsByTrackUri
})

const mapDispatchToProps = {
  onPreGameTabIndexChange,
  getEventSuggestions,
  acceptSuggestedTracks,
  savePreGamePlaylist,
  resetUnsavedPlaylist
}

const PreGameViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PreGameView as any) as any)

export default PreGameViewContainer
