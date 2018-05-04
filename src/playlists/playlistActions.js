export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS'
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR'

export const fetchPlaylists = () => ({
  type: FETCH_PLAYLISTS
})

export const fetchPlaylistsSuccess = data => ({
  payload: data,
  type: FETCH_PLAYLISTS_SUCCESS
})

export const fetchPlaylistsError = error => ({
  payload: error,
  type: FETCH_PLAYLISTS_ERROR
})
