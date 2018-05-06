import Action from '../Action'
import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLISTS_SUCCESS
} from './playlistActions'
import initialState from './playlistInitialState'

export default function playlist(
  state = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case FETCH_PLAYLISTS:
      return { ...initialState, isLoading: true }
    case FETCH_PLAYLISTS_SUCCESS:
      return { ...initialState, data: payload, isLoading: false }
    case FETCH_PLAYLISTS_ERROR:
      return { ...initialState, error: payload }
    default:
      return state
  }
}
