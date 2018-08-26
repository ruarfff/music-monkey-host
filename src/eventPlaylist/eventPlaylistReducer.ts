import IAction from '../IAction'
import {
  SAVE_EVENT_PLAYLIST,
  SAVE_EVENT_PLAYLIST_ERROR,
  SAVE_EVENT_PLAYLIST_SUCCESS
} from './eventPlaylistActions'
import initialState from './eventPlaylistInitialState'
import IEventPlaylistState from './IEventPlaylistState'

export default function eventPlaylist(
  state: IEventPlaylistState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case SAVE_EVENT_PLAYLIST:
      return { ...state, savingEventPlaylist: true }
    case SAVE_EVENT_PLAYLIST_SUCCESS:
      return { ...state, savingEventPlaylist: false }
    case SAVE_EVENT_PLAYLIST_ERROR:
      return {
        ...state,
        savingEventPlaylist: false,
        saveEventPlaylistError: payload
      }
    default:
      return state
  }
}
