import axios from 'axios'
import { flatten, forOwn, groupBy } from 'lodash'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../../auth/authConstants'
import IPlaylistQuery from '../../playlists/IPlaylistQuery'
import parsePlayistUrl from '../../playlists/parsePlaylistUrl'
import localStorage from '../../storage/localStorage'
import ISuggestion from './ISuggestion'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export default class EventDecorator {
  public decorateSuggestions = (suggestions: ISuggestion[]) => {
    const decorateSuggestions: any[] = []
    forOwn(groupBy(suggestions, 'userId'), (value, key) => {
      const userPromise = this.getUser(key)
      const tracksPromise = Promise.all(value.map(this.suggestionToTracks))
      decorateSuggestions.push(
        new Promise((resolve, reject) => {
          userPromise.then(user => {
            tracksPromise
              .then(results => {
                const tracks = flatten(results)
                resolve({ user, tracks })
              })
              .catch(reject)
          })
        })
      )
    })
    return Promise.all(decorateSuggestions)
  }
  private getUser = (userId: string) => {
    return axios
      .get(serviceUrl + '/users/' + userId)
      .then(response => response.data)
  }

  private getSuggestedItems = (item: string) => {
    const token = localStorage.get(accessTokenKey)
    const playlistQuery: IPlaylistQuery | undefined = parsePlayistUrl(item)
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

  private suggestionToTracks = ({ item }: ISuggestion) =>
    this.getSuggestedItems(item).then(playlist =>
      playlist.tracks.items.map(t => t.track)
    )
}
