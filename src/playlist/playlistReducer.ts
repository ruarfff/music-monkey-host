import Action from '../IAction'
import {
  ADD_TRACK_FAILURE,
  ADD_TRACK_SUCCESS,
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLISTS_SUCCESS,
  PLAYLIST_DESELECTED,
  PLAYLIST_SELECTED,
  REMOVE_TRACK_FAILURE,
  REMOVE_TRACK_SUCCESS,
  SEARCH_TRACKS_FAILURE,
  SEARCH_TRACKS_SUCCESS,
  TRACK_FEATURES_FAILURE,
  TRACK_FEATURES_SUCCESS
} from './playlistActions'
import initialState from './playlistInitialState'

export default function playlists(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case TRACK_FEATURES_SUCCESS:
      return {
        ...state,
        tracksWithFeatures: payload.audio_features
      }
    case TRACK_FEATURES_FAILURE:
      return state
    case REMOVE_TRACK_SUCCESS:
      return {
        ...state,
        notification: 'Track successfully removed'
      }
    case REMOVE_TRACK_FAILURE:
      return {
        ...state,
        notification: 'Error. Retry remove track later',
      }
    case ADD_TRACK_SUCCESS:
      return {
        ...state,
        notification: 'Track successfully added',
      }
    case ADD_TRACK_FAILURE:
      return {
        ...state,
        notification: 'Error. Retry add track later',
      }
    case SEARCH_TRACKS_SUCCESS:
      return { ...state, searchResult: payload.tracks }
    case SEARCH_TRACKS_FAILURE:
      return state
    case FETCH_PLAYLISTS:
      return { ...state, isLoading: true }
    case FETCH_PLAYLISTS_SUCCESS:
      return { ...state, data: payload, isLoading: false }
    case FETCH_PLAYLISTS_ERROR:
      return { ...state, error: payload }
    case PLAYLIST_SELECTED:
      return { ...state, selectedPlaylist: payload }
    case PLAYLIST_DESELECTED:
      return { ...state, selectedPlaylist: {} }
    default:
      return state
  }
}
