import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import IPlaylist from '../playlists/IPlaylist'
import IPlaylistQuery from '../playlists/IPlaylistQuery'
import parsePlayistUrl from '../playlists/parsePlaylistUrl'
import localStorage from '../storage/localStorage'
import IEvent from './IEvent'

export default class EventDecorator {
  public getEventPlaylist = (event: IEvent) => {
    const token = localStorage.get(accessTokenKey)
    const playlistQuery: IPlaylistQuery | undefined = parsePlayistUrl(
      event.playlistUrl
    )
    const spotifyApi = new SpotifyWebApi()

    spotifyApi.setAccessToken(token)
    if (playlistQuery) {
      return spotifyApi.getPlaylist(
        playlistQuery.userName,
        playlistQuery.playlistId
      )
    } else {
      return Promise.reject(new Error('Invalid Playlist Url'))
    }
  }

  public decorateEvent = (event: IEvent) => {
    return new Promise((resolve, reject) => {
      this.getEventPlaylist(event)
        .then(playlist => {
          resolve({ ...event, playlist: playlist as IPlaylist })
        })
        .catch(err => {
          resolve(event)
        })
    })
  }

  public decorateEvents = (events: IEvent[]) => {
    return Promise.all(events.map(this.decorateEvent))
  }
}
