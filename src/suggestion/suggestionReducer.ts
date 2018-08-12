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
      const suggestions = payload
      return {
        ...state,
        fetchingSuggestions: false,
        pendingSuggestions: suggestions.filter(
          (s: ISuggestion) => !s.accepted && !s.rejected
        ),
        rejectedSuggestions: suggestions.filter((s: ISuggestion) => s.rejected),
        acceptedSuggestions: suggestions.filter((s: ISuggestion) => s.accepted)
      } as ISuggestionState
    case FETCH_SUGGESTIONS_FAILED:
      return {
        ...state,
        fetchingSuggestions: false,
        fetchingSuggestionsError: payload
      } as ISuggestionState
    case SET_SUGGESTION_TO_ACCEPTED:
      const suggestionToAccept = state.pendingSuggestions.find(
        s => s.suggestion.suggestionId === payload.suggestionId
      )
      const acceptedSuggestions = !!suggestionToAccept
        ? [
            ...state.acceptedSuggestions,
            {
              ...suggestionToAccept,
              suggestion: { ...suggestionToAccept.suggestion, accepted: true }
            }
          ]
        : state.acceptedSuggestions
      const pendingSuggestions = !!suggestionToAccept
        ? state.pendingSuggestions.filter(
            s => s.suggestion.suggestionId !== payload.suggestionId
          )
        : state.pendingSuggestions

      return {
        ...state,
        acceptedSuggestions,
        pendingSuggestions
      }
    case SET_SUGGESTIONS_TO_ACCEPTED:
      const suggestionsToAccept: ISuggestion[] = payload || []
      const pendingWithAcceptedSet = state.pendingSuggestions.map(ds => {
        if (
          suggestionsToAccept.find(
            s => s.suggestionId === ds.suggestion.suggestionId
          )
        ) {
          return {
            ...ds,
            suggestion: {
              ...ds.suggestion,
              accepted: true
            }
          }
        } else {
          return ds
        }
      })

      return {
        ...state,
        pendingSuggestions: pendingWithAcceptedSet.filter(
          s => !s.suggestion.accepted
        ),
        acceptedSuggestions: [
          ...state.acceptedSuggestions,
          ...pendingWithAcceptedSet.filter(s => s.suggestion.accepted)
        ]
      }
    case SET_ALL_SUGGESTIONS_TO_ACCEPTED:
      const pendingSetToAccepted = state.pendingSuggestions.map(
        (decoratedSuggestion: IDecoratedSuggestion) => ({
          ...decoratedSuggestion,
          suggestion: { ...decoratedSuggestion.suggestion, accepted: true }
        })
      )
      return {
        ...state,
        pendingSuggestions: [],
        acceptedSuggestions: [
          ...state.acceptedSuggestions,
          ...pendingSetToAccepted
        ]
      }
    default:
      return state
  }
}
