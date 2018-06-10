import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import IPreGameState from './IPreGameState'
import {
  PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
  PRE_GAME_RESET_UNSAVED_PLAYLIST,
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
    case PRE_GAME_TAB_INDEX_CHANGED:
      return {
        ...state,
        preGameTabIndex: payload
      }
    case SAVE_PRE_GAME_PLAYLIST:
      return { ...state, saving: true }
    case SAVE_PRE_GAME_PLAYLIST_SUCCESS:
      return { ...state, saving: false }
    case SAVE_PRE_GAME_PLAYLIST_ERROR:
      return { ...state, saving: false, saveEventPlaylistError: payload }
    case PRE_GAME_RESET_UNSAVED_PLAYLIST:
      return { ...state, acceptedSuggestionsByTrackUri: new Map() }
    case PRE_GAME_ACCEPT_SUGGESTED_TRACKS:
      const suggestionMap = new Map(state.acceptedSuggestionsByTrackUri)
      if (payload) {
        payload.forEach((ds: IDecoratedSuggestion) => {
          suggestionMap.set(ds.track.uri, ds)
        })
      }
      return {
        ...state,
        acceptedSuggestionsByTrackUri: suggestionMap
      }
    default:
      return state
  }
}
