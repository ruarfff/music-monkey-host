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

const EventSuggestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSuggestions)

export default EventSuggestionContainer
