import { connect } from 'react-redux'
import IRootState from '../rootState'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import EventSuggestions from './EventSuggestions'

const mapStateToProps = (state: IRootState) => ({
  suggestions: state.suggestion.suggestions
})

const mapDispatchToProps = {
  onAcceptSuggestions: (suggestions: IDecoratedSuggestion[]): void => {
    console.log(suggestions)
  }
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSuggestions)

export default PreGameViewContainer
