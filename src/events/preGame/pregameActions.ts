import IAction from '../../Action'

export const PRE_GAME_TAB_INDEX_CHANGED = 'PRE_GAME_TAB_INDEX_CHANGED'
export const PRE_GAME_SUGGESTIONS_FETCH_INITIATED =
  'PRE_GAME_SUGGESTIONS_FETCH_INITIATED'
export const PRE_GAME_SUGGESTIONS_FETCHED = 'PRE_GAME_SUGGESTIONS_FETCHED'
export const PRE_GAME_SUGGESTIONS_FETCH_ERROR =
  'PRE_GAME_SUGGESTIONS_FETCH_ERROR'

export const onPreGameTabIndexChange = (index: number): IAction => ({
  type: PRE_GAME_TAB_INDEX_CHANGED,
  payload: index
})

export const fetchPreGameSuggestion = (eventId: string): IAction => ({
  type: PRE_GAME_SUGGESTIONS_FETCH_INITIATED,
  payload: eventId
})
