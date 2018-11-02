import SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import http from '../http'
import localStorage from '../storage/localStorage'
import IUser from '../user/IUser'
import IPlaylist from './IPlaylist'

export const addTracksToPlaylist = (
  playlistId: string,
  trackUris: string[]
) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.addTracksToPlaylist(playlistId, trackUris)
}

export const reOrderPlaylist = (
  playlist: IPlaylist,
  fromIndex: number,
  toIndex: number
) => {
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

export const fetchPlaylist = (playlistId: string) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.getPlaylist(playlistId)
}

export const fetchUsersPlaylists = async (user: IUser) => {
  const res = await http.get('/users/' + user.userId + '/playlists', {
    withCredentials: true
  })
  return res.data
}

export const createPlaylist = (name: string, description = '') => {
  const spotifyApi = getSpotifyApi()

  return spotifyApi.createPlaylist({
    description,
    name,
    public: true
  })
}

export const replaceTracksInPlaylist = (
  playlistId: string,
  trackUris: string[]
) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.replaceTracksInPlaylist(playlistId, trackUris)
}

export const removeTrackFromPlaylist = (
  playlistId: string,
  uri: string,
  position: number
) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.removeTracksFromPlaylist(playlistId, [{ uri }, position])
}

export const searchForTracks = async (searchTerm: string) => {
  const response = await http.get(
    '/search?q=' + encodeURIComponent(searchTerm) + '&type=track',
    {
      withCredentials: true
    }
  )
  return response.data
}

export const getTracksFeatures = (trackIds: string[]) => {
  const spotifyApi = getSpotifyApi()
  return spotifyApi.getAudioFeaturesForTracks(trackIds)
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
