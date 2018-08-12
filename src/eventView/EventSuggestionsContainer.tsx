import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventSuggestions from './EventSuggestions'
import { acceptSuggestedTracks } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  suggestions: state.suggestion.pendingSuggestions
})

const mapDispatchToProps = {
  acceptSuggestedTracks
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSuggestions)

export default PreGameViewContainer
