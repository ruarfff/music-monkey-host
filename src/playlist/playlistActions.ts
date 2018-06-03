import Action from '../IAction'
import IPlaylist from './IPlaylist'

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS'
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR'
export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED'
export const PLAYLIST_DESELECTED = 'PLAYLIST_DESELECTED'

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

export const onPlaylistSelected = (playlist: IPlaylist) => ({
  type: PLAYLIST_SELECTED,
  payload: playlist
})

export const deselectPlaylist = () => ({
  type: PLAYLIST_DESELECTED
})
