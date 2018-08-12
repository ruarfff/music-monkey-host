import IAction from '../IAction'
import ISuggestion from './ISuggestion'

export const FETCH_SUGGESTIONS_INITIATED = 'FETCH_SUGGESTIONS_INITIATED'
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS'
export const FETCH_SUGGESTIONS_FAILED = 'FETCH_SUGGESTIONS_FAILED'

export const ACCEPT_SUGGESTION = 'ACCEPT_SUGGESTION'
export const ACCEPT_MULTIPLE_SUGGESTIONS = 'ACCEPT_MULTIPLE_SUGGESTIONS'
export const ACCEPT_ALL_SUGGESTIONS = 'ACCEPT_ALL_SUGGESTIONS'

export const REJECT_SUGGESTION = 'REJECT_SUGGESTION'

export const getEventSuggestions = (eventId: string): IAction => ({
  type: FETCH_SUGGESTIONS_INITIATED,
  payload: eventId
})

export const acceptSuggestion = (suggestion: ISuggestion): IAction => ({
  type: ACCEPT_SUGGESTION,
  payload: suggestion
})

export const acceptMultipleSuggestions = (
  suggestions: ISuggestion[]
): IAction => ({
  type: ACCEPT_MULTIPLE_SUGGESTIONS,
  payload: suggestions
})

export const acceptAllSuggestions = (): IAction => ({
  type: ACCEPT_ALL_SUGGESTIONS
})

export const rejectSuggestion = (suggestion: ISuggestion): IAction => ({
  type: REJECT_SUGGESTION,
  payload: suggestion
})
