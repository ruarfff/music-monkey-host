import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../rootState'
import { getEventSuggestions } from '../suggestion/suggestionActions'
import { acceptSuggestedTracks, onPreGameTabIndexChange } from './pregameActions'
import PreGameView from './PreGameView'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  preGameTabIndex: state.preGame.preGameTabIndex,
  suggestions: state.suggestion.suggestions
})

const mapDispatchToProps = {
  onPreGameTabIndexChange,
  getEventSuggestions,
  acceptSuggestedTracks
}

const PreGameViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PreGameView as any) as any)

export default PreGameViewContainer
