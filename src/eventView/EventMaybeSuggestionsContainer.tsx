import { connect } from 'react-redux'
import IRootState from '../rootState'
import {
  stageSuggestion
} from '../suggestion/suggestionActions'
import EventMaybeSuggestions from './EventMaybeSuggestions'

const mapStateToProps = (state: IRootState) => ({
  suggestions: state.suggestion.rejectedSuggestions
})

const mapDispatchToProps = {
  stageSuggestion,
}

const EventMaybeSuggestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventMaybeSuggestions)

export default EventMaybeSuggestionsContainer
