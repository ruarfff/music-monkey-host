import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'
import ISuggestionState from './ISuggestionState'
import { 
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS,
  SET_ALL_SUGGESTIONS_TO_ACCEPTED,
  SET_SUGGESTION_TO_ACCEPTED,
  SET_SUGGESTIONS_TO_ACCEPTED
} from './suggestionActions'
import initialState from './suggestionInitialState'

export default function suggestion(
  state: ISuggestionState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case FETCH_SUGGESTIONS_INITIATED:
      return { ...state, fetchingSuggestions: true } as ISuggestionState
    case FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        fetchingSuggestions: false,
        suggestions: payload
      } as ISuggestionState
    case FETCH_SUGGESTIONS_FAILED:
      return {
        ...state,
        fetchingSuggestions: false,
        fetchingSuggestionsError: payload
      } as ISuggestionState   
    case SET_SUGGESTION_TO_ACCEPTED:
      const suggestionsInPlace = [...state.suggestions]
      let index = 0
      const suggestionToAccept = state.suggestions.find((s, i) => {
        const found = s.suggestion.suggestionId === payload.suggestionId
        if (found) {
          index = i
        }
        return found
      })
      if (suggestionToAccept) {
        suggestionsInPlace[index] = {
          ...suggestionToAccept,
          suggestion: { ...suggestionToAccept.suggestion, accepted: true }
        }
      }
      return {
        ...state,
        suggestions: suggestionsInPlace
      }
    case SET_SUGGESTIONS_TO_ACCEPTED:
      const suggestionsToAccept = payload || []
      return {
        ...state,
        suggestions: state.suggestions.map(
          (decoratedSuggestion: IDecoratedSuggestion) => {
            if (
              suggestionsToAccept.find(
                (s: ISuggestion) =>
                  s.suggestionId === decoratedSuggestion.suggestion.suggestionId
              )
            ) {
              return {
                ...decoratedSuggestion,
                suggestion: {
                  ...decoratedSuggestion.suggestion,
                  accepted: true
                }
              }
            }
            return decoratedSuggestion
          }
        )
      }
    case SET_ALL_SUGGESTIONS_TO_ACCEPTED:
      return {
        ...state,
        suggestions: state.suggestions.map(
          (decoratedSuggestion: IDecoratedSuggestion) => ({
            ...decoratedSuggestion,
            suggestion: { ...decoratedSuggestion.suggestion, accepted: true }
          })
        )
      }
    default:
      return state
  }
}
