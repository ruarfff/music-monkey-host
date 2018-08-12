import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'
import ISuggestionState from './ISuggestionState'
import {
  ACCEPT_ALL_SUGGESTIONS,
  ACCEPT_MULTIPLE_SUGGESTIONS,
  ACCEPT_SUGGESTION,
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS,
  REJECT_SUGGESTION
} from './suggestionActions'
import initialState from './suggestionInitialState'

export default function suggestion(
  state: ISuggestionState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case FETCH_SUGGESTIONS_INITIATED:
      return { ...state, fetchingSuggestions: true } as ISuggestionState
    case FETCH_SUGGESTIONS_SUCCESS: {
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
    }
    case FETCH_SUGGESTIONS_FAILED:
      return {
        ...state,
        fetchingSuggestions: false,
        fetchingSuggestionsError: payload
      } as ISuggestionState
    case ACCEPT_SUGGESTION: {
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
    }
    case ACCEPT_MULTIPLE_SUGGESTIONS: {
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
    }
    case ACCEPT_ALL_SUGGESTIONS: {
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
    }
    case REJECT_SUGGESTION: {
      const suggestionToReject = state.pendingSuggestions.find(
        s => s.suggestion.suggestionId === payload.suggestionId
      ) 
      const rejectedSuggestions = !!suggestionToReject
        ? [
            ...state.rejectedSuggestions,
            {
              ...suggestionToReject,
              suggestion: { ...suggestionToReject.suggestion, rejected: true }
            }
          ]
        : state.rejectedSuggestions
      const pendingSuggestions = !!suggestionToReject
        ? state.pendingSuggestions.filter(
            s => s.suggestion.suggestionId !== payload.suggestionId
          )
        : state.pendingSuggestions

      return {
        ...state,
        rejectedSuggestions,
        pendingSuggestions
      }
    }
    default:
      return state
  }
}
