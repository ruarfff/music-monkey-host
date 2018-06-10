import ISuggestion from './ISuggestion'
export const FETCH_SUGGESTIONS_INITIATED = 'FETCH_SUGGESTIONS_INITIATED'
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS'
export const FETCH_SUGGESTIONS_FAILED = 'FETCH_SUGGESTIONS_FAILED'

export const SET_SUGGESTION_TO_ACCEPTED = 'SET_SUGGESTION_TO_ACCEPTED'
export const SET_SUGGESTIONS_TO_ACCEPTED = 'SET_SUGGESTIONS_TO_ACCEPTED'
export const SET_ALL_SUGGESTIONS_TO_ACCEPTED = 'SET_ALL_SUGGESTIONS_TO_ACCEPTED'


export const getEventSuggestions = (eventId: string) => ({
  type: FETCH_SUGGESTIONS_INITIATED,
  payload: eventId
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
