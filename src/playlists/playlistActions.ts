import Action from '../Action'
import { IPlaylist } from './PlaylistModel'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS'
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR'

export const fetchPlaylists = () => ({
  type: FETCH_PLAYLISTS
})

export const fetchPlaylistsSuccess = (data: IPlaylist): Action => ({
  payload: data,
  type: FETCH_PLAYLISTS_SUCCESS
})

export const fetchPlaylistsError = (error: Error) => ({
  payload: error,
  type: FETCH_PLAYLISTS_ERROR
})
