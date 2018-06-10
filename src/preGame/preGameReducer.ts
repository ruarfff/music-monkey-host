import { EVENT_FETCH_BY_ID_INITIATED } from '../eventView/eventViewActions'
import IAction from '../IAction'
import IPreGameState from './IPreGameState'
import {
  PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
  PRE_GAME_TAB_INDEX_CHANGED,
  SAVE_PRE_GAME_PLAYLIST,
  SAVE_PRE_GAME_PLAYLIST_ERROR,
  SAVE_PRE_GAME_PLAYLIST_SUCCESS
} from './pregameActions'
import initialState from './preGameInitialState'

export default function preGameView(
  state: IPreGameState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case EVENT_FETCH_BY_ID_INITIATED:
      return {
        ...state,
        acceptedTracks: [],
        suggestions: []
      }
    case PRE_GAME_TAB_INDEX_CHANGED:
      return {
        ...state,
        preGameTabIndex: payload
      }
    case SAVE_PRE_GAME_PLAYLIST:
      return { ...state, saving: true }
    case SAVE_PRE_GAME_PLAYLIST_SUCCESS:
      return { ...state, saving: false, acceptedTracks: [] }
    case SAVE_PRE_GAME_PLAYLIST_ERROR:
      return { ...state, saving: false }
    case PRE_GAME_ACCEPT_SUGGESTED_TRACKS:
      return {
        ...state,
        acceptedSuggestions: [...state.acceptedSuggestions, ...payload]
      }
    default:
      return state
  }
}
