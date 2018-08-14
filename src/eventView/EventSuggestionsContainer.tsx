import { connect } from 'react-redux'
import IRootState from '../rootState'
import {
  rejectSuggestion,
  stageAllSuggestions,
  stageSuggestion
} from '../suggestion/suggestionActions'
import EventSuggestions from './EventSuggestions'

const mapStateToProps = (state: IRootState) => ({
  suggestions: state.suggestion.pendingSuggestions
})

const mapDispatchToProps = {
  stageAllSuggestions,
  stageSuggestion,
  rejectSuggestion
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSuggestions)

export default PreGameViewContainer
