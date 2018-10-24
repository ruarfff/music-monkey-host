import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import http from '../http'

export const addTracksToPlaylist = (playlistId, trackUris) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.addTracksToPlaylist(playlistId, trackUris)
}

export const reOrderPlaylist = (playlist, fromIndex, toIndex) => {
  const spotifyApi = getSpotifyApi()
  let insertBefore = toIndex
  if (fromIndex < toIndex) {
    insertBefore++
  }
  return spotifyApi.reorderTracksInPlaylist(
    playlist.id,
    fromIndex,
    insertBefore
  )
}

export const fetchPlaylist = playlistId => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.getPlaylist(playlistId)
}

export const fetchUsersPlaylists = async user => {
  const res = await http.get('/users/' + user.userId + '/playlists', {
    withCredentials: true
  })
  return res.data
}

export const createPlaylist = (userId, name, description) => {
  const spotifyApi = getSpotifyApi()

  return spotifyApi.createPlaylist(userId, {
    description,
    name,
    public: true
  })
}

export const replaceTracksInPlaylist = (playlistId, trackUris) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.replaceTracksInPlaylist(playlistId, trackUris)
}

/**
 * Initialize the spotify api with an access token.
 * Better not to cache this and call in each method in case the cached token expires.
 */
function getSpotifyApi() {
  const token = localStorage.get(accessTokenKey)
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  return spotifyApi
}
