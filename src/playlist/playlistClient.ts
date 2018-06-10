import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import IUser from '../user/IUser'
import IPlaylist from './IPlaylist'

export const fetchUsersPlaylists = (user: IUser) => {
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
                  } as IPlaylist)
                })
                .catch(rej)
            })
        )
      )
      playlistsWithTracks.then(resolve).catch(reject)
    })
  })
}
