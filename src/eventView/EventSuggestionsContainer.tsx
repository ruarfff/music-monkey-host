import { connect } from 'react-redux'
import IRootState from '../rootState'
import {
  acceptAllSuggestions,
  acceptSuggestion,
  rejectSuggestion
} from '../suggestion/suggestionActions'
import EventSuggestions from './EventSuggestions'

const mapStateToProps = (state: IRootState) => ({
  suggestions: state.suggestion.pendingSuggestions
})

const mapDispatchToProps = {
  acceptAllSuggestions,
  acceptSuggestion,
  rejectSuggestion
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSuggestions)

export default PreGameViewContainer
