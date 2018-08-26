import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import IUser from '../user/IUser'
import IPlaylist from './IPlaylist'

export const reOrderPlaylist = (playlist, fromIndex, toIndex) => {
  const token = localStorage.get(accessTokenKey)

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)

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
  const token = localStorage.get(accessTokenKey)

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)

  return spotifyApi.getPlaylist(playlistId)
}

export const fetchUsersPlaylists = user => {
  const token = localStorage.get(accessTokenKey)

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
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
                .getPlaylistTracks(playlist.owner.id, playlist.id)
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
