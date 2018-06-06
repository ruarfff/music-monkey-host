import IAction from '../IAction'
import ISuggestingState from './ISuggestionState'
import {
  CLEAR_SAVED_SUGGESTION,
  DELETE_SUGGESTION_FAILED,
  DELETE_SUGGESTION_INITIATED,
  DELETE_SUGGESTION_SUCCESS,
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS,
  SAVE_SUGGESTION_FAILED,
  SAVE_SUGGESTION_INITIATED,
  SAVE_SUGGESTION_SUCCESS
} from './suggestionActions'
import initialState from './suggestionInitialState'

export default function events(
  state: ISuggestingState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case SAVE_SUGGESTION_INITIATED:
      return { ...state, savingSuggestion: true } as ISuggestingState
    case SAVE_SUGGESTION_SUCCESS:
      return {
        ...state,
        savingSuggestion: false,
        savedSuggestion: payload
      } as ISuggestingState
    case SAVE_SUGGESTION_FAILED:
      return {
        ...state,
        savingSuggestion: false,
        savingSuggestionError: payload
      } as ISuggestingState
    case FETCH_SUGGESTIONS_INITIATED:
      return { ...state, fetchingSuggestions: true } as ISuggestingState
    case FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        fetchingSuggestions: false,
        suggestions: payload
      } as ISuggestingState
    case FETCH_SUGGESTIONS_FAILED:
      return {
        ...state,
        fetchingSuggestions: false,
        fetchinSuggestionsError: payload
      } as ISuggestingState
    case CLEAR_SAVED_SUGGESTION:
      return {
        ...state,
        savedSuggestion: undefined
      }
    case DELETE_SUGGESTION_INITIATED:
      return {
        ...state,
        deletingSuggestion: true
      }
    case DELETE_SUGGESTION_FAILED:
      return {
        ...state,
        deletingSuggestion: false,
        deletingSuggestionError: payload
      }
    case DELETE_SUGGESTION_SUCCESS:
      return {
        ...state,
        deletingSuggestion: false,
        deletedSuggestion: payload
      }
    default:
      return state
  }
}
