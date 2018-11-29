import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'

export const FETCH_SUGGESTIONS_INITIATED = 'FETCH_SUGGESTIONS_INITIATED'
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS'
export const FETCH_SUGGESTIONS_FAILED = 'FETCH_SUGGESTIONS_FAILED'

export const STAGE_SUGGESTION = 'STAGE_SUGGESTION'
export const STAGE_MULTIPLE_SUGGESTIONS = 'STAGE_MULTIPLE_SUGGESTIONS'
export const STAGE_ALL_SUGGESTIONS = 'STAGE_ALL_SUGGESTIONS'
export const RESET_STAGED_SUGGESTIONS = 'RESET_STAGED_SUGGESTIONS'
export const CLEAR_STAGED_SUGGESTIONS = 'CLEAR_STAGED_SUGGESTIONS'

export const REJECT_SUGGESTION = 'REJECT_SUGGESTION'
export const REJECT_SUGGESTION_SUCCESS = 'REJECT_SUGGESTION_SUCCESS'
export const REJECT_SUGGESTION_FAILED = 'REJECT_SUGGESTION_FAILED'

export const getEventSuggestions = (eventId: string): IAction => ({
  type: FETCH_SUGGESTIONS_INITIATED,
  payload: eventId
})

export const stageSuggestion = (suggestion: ISuggestion): IAction => ({
  type: STAGE_SUGGESTION,
  payload: suggestion
})

export const stageMultipleSuggestions = (
  suggestions: ISuggestion[]
): IAction => ({
  type: STAGE_MULTIPLE_SUGGESTIONS,
  payload: suggestions
})

export const stageAllSuggestions = (suggestions: IDecoratedSuggestion[]): IAction => ({
  type: STAGE_ALL_SUGGESTIONS,
  payload: suggestions
})

export const resetStagedSuggestions = (): IAction => ({
  type: RESET_STAGED_SUGGESTIONS
})

export const rejectSuggestion = (suggestion: ISuggestion): IAction => ({
  type: REJECT_SUGGESTION,
  payload: suggestion
})
