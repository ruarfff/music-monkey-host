import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import IUser from '../user/IUser'
import IPlaylist from './IPlaylist'

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

export const fetchUsersPlaylists = user => {
  const spotifyApi = getSpotifyApi()
  return new Promise((resolve, reject) => {
    spotifyApi.getUserPlaylists().then(response => {
      const playlists = response.items.filter(
        playlist => playlist.owner.id === user.spotifyId
      )

      const playlistsWithTracks = Promise.all(
        playlists.map(
          playlist =>
            new Promise((r, rej) => {
              spotifyApi
                .getPlaylistTracks(playlist.id)
                .then(tracks => {
                  r({
                    ...playlist,
                    tracks: { ...playlist.tracks, items: tracks.items }
                  })
                })
                .catch(rej)
            })
        )
      )
      playlistsWithTracks.then(resolve).catch(reject)
    })
  })
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
