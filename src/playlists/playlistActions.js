export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS'
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS'
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR'

export const fetchPlaylists = () => ({
  type: FETCH_PLAYLISTS
})

export const fetchPlaylistsSuccess = data => ({
  type: FETCH_PLAYLISTS_SUCCESS,
  payload: data
})

export const fetchPlaylistsError = error => ({
  type: FETCH_PLAYLISTS_ERROR,
  payload: error
})
