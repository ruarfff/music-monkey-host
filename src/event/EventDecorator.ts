import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import IPlaylist from '../playlist/IPlaylist'
import IPlaylistQuery from '../playlist/IPlaylistQuery'
import parsePlayistUrl from '../playlist/parsePlaylistUrl'
import localStorage from '../storage/localStorage'
import IEvent from './IEvent'

const defaultEventImage = '/img/partycover-sm.png'

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
          let imageUrl = event.imageUrl
          if (!imageUrl) {
            imageUrl =
              playlist.images && playlist.images.length > 0
                ? playlist.images[0].url
                : defaultEventImage
          }

          resolve({ ...event, imageUrl, playlist: playlist as IPlaylist })
        })
        .catch(err => {
          resolve({
            ...event,
            imageUrl: event.imageUrl ? event.imageUrl : defaultEventImage
          })
        })
    })
  }

  public decorateEvents = (events: IEvent[]) => {
    return Promise.all(events.map(this.decorateEvent))
  }
}
