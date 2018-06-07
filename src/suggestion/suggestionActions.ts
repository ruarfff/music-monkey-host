import ISuggestion from './ISuggestion'

export const SAVE_SUGGESTION_INITIATED = 'SAVE_SUGGESTION_INITIATED'
export const SAVE_SUGGESTION_SUCCESS = 'SAVE_SUGGESTION_SUCCESS'
export const SAVE_SUGGESTION_FAILED = 'SAVE_SUGGESTION_FAILED'
export const FETCH_SUGGESTIONS_INITIATED = 'FETCH_SUGGESTIONS_INITIATED'
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS'
export const FETCH_SUGGESTIONS_FAILED = 'FETCH_SUGGESTIONS_FAILED'
export const DELETE_SUGGESTION_INITIATED = 'DELETE_SUGGESTION_INITIATED'
export const DELETE_SUGGESTION_SUCCESS = 'DELETE_SUGGESTION_SUCCESS'
export const DELETE_SUGGESTION_FAILED = 'DELETE_SUGGESTION_FAILED'
export const CLEAR_SAVED_SUGGESTION = 'CLEAR_SAVED_SUGGESTION'

export const SET_SUGGESTION_TO_ACCEPTED = 'SET_SUGGESTION_TO_ACCEPTED'
export const SET_SUGGESTIONS_TO_ACCEPTED = 'SET_SUGGESTIONS_TO_ACCEPTED'
export const SET_ALL_SUGGESTIONS_TO_ACCEPTED = 'SET_ALL_SUGGESTIONS_TO_ACCEPTED'

export const saveSuggestion = (suggestion: ISuggestion) => ({
  type: SAVE_SUGGESTION_INITIATED,
  payload: suggestion
})

export const getEventSuggestions = (eventId: string) => ({
  type: FETCH_SUGGESTIONS_INITIATED,
  payload: eventId
})

export const clearSavedSuggestion = () => ({
  type: CLEAR_SAVED_SUGGESTION
})

export const deleteSuggestion = (suggestion: ISuggestion) => ({
  type: DELETE_SUGGESTION_INITIATED,
  payload: suggestion
})

export const setSuggestionToAccepted = (suggestion: ISuggestion) => ({
  type: SET_SUGGESTION_TO_ACCEPTED,
  payload: suggestion
})

export const setSuggestionsToAccepted = (suggestions: ISuggestion[]) => ({
  type: SET_SUGGESTIONS_TO_ACCEPTED,
  payload: suggestions
})

export const setAllSuggestionsToAccepted = () => ({
  type: SET_ALL_SUGGESTIONS_TO_ACCEPTED
})
