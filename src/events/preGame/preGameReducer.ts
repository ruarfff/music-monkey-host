import IAction from '../../Action'
import IPreGameState from './IPreGameState'
import { PRE_GAME_TAB_INDEX_CHANGED } from './pregameActions'
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
    default:
      return state
  }
}
