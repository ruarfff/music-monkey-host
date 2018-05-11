import IAction from '../../Action'
import IPreGameState from './IPreGameState'
import {
  PRE_GAME_SUGGESTIONS_FETCH_ERROR,
  PRE_GAME_SUGGESTIONS_FETCHED,
  PRE_GAME_TAB_INDEX_CHANGED
} from './pregameActions'
import initialState from './preGameInitialState'

export default function preGameView(
  state: IPreGameState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case PRE_GAME_TAB_INDEX_CHANGED:
      return {
        ...state,
        preGameTabIndex: payload
      }
    case PRE_GAME_SUGGESTIONS_FETCHED:
      return {
        ...state,
        suggestions: payload
      }
    case PRE_GAME_SUGGESTIONS_FETCH_ERROR:
      return {
        ...state,
        suggestionFetchError: payload
      }
    default:
      return state
  }
}
