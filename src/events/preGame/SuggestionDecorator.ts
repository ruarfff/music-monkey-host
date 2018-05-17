import axios from 'axios'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../../auth/authConstants'
import IPlaylistQuery from '../../playlists/IPlaylistQuery'
import parsePlayistUrl from '../../playlists/parsePlaylistUrl'
import localStorage from '../../storage/localStorage'
import ISuggestion from './ISuggestion'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export default class EventDecorator {
  public decorateSuggestions = (suggestions: ISuggestion[]) => {
    return Promise.all(suggestions.map(this.decorateSuggestion))
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

  private decorateSuggestion = (suggestion: ISuggestion) => {
    const { userId, item } = suggestion

    return new Promise((resolve, reject) => {
      this.getUser(userId).then(user => {
        this.getSuggestedItems(item).then(playlist => {
          resolve({
            user,
            tracks: playlist.tracks.items.map(t => t.track)
          })
        })
      })
    })
  }
}
