import axios from 'axios'
import { flatten, forOwn, groupBy } from 'lodash'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import ISuggestion from './ISuggestion'
import ISuggestionItem from './ISuggestionItem'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export default class SuggestionDecorator {
  public decorateSuggestions = (suggestions: ISuggestion[]) => {
    const decorateSuggestions: any[] = []
    forOwn(groupBy(suggestions, 'userId'), (value, key) => {
      const userPromise = this.getUser(key)
      const tracksPromise = Promise.all(
        value.map(this.suggestionToTracks).map(p => p.catch(error => error))
      ).then(values => values.filter(v => !(v instanceof Error)))

      decorateSuggestions.push(
        new Promise((resolve, reject) => {
          userPromise.then(user => {
            tracksPromise
              .then(results => {
                const tracks = flatten(results)
                resolve({ user, tracks, suggestion: value })
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

  private getSuggestedPlaylistItems = ({ id, refId }: ISuggestionItem) => {
    const token = localStorage.get(accessTokenKey)
    const spotifyApi = new SpotifyWebApi()
    if (id && refId) {
      spotifyApi.setAccessToken(token)
      return spotifyApi.getPlaylist(refId, id)
    } else {
      return Promise.reject(new Error('Invalid Playlist Url'))
    }
  }

  private getSuggestedTrackItem = ({ id }: ISuggestionItem) => {
    const token = localStorage.get(accessTokenKey)
    const spotifyApi = new SpotifyWebApi()
    if (id) {
      spotifyApi.setAccessToken(token)
      return spotifyApi.getTrack(id)
    } else {
      return Promise.reject(new Error('Invalid track Id'))
    }
  }

  private suggestionToTracks = (suggestion: ISuggestion) => {
    if (suggestion.type === 'playlist') {
      return this.getSuggestedPlaylistItems(suggestion.item).then(playlist =>
        playlist.tracks.items.map(t => t.track)
      )
    } else if (suggestion.type === 'track') {
      return this.getSuggestedTrackItem(suggestion.item)
    } else {
      return Promise.reject(
        new Error('Invalid suggestion type: ' + suggestion.type)
      )
    }
  }
}
