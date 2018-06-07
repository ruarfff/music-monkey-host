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
    forOwn(groupBy(suggestions, 'userId'), (suggestion, userId) => {
      const userPromise = this.getUser(userId)
      const tracksPromise = Promise.all(
        suggestion
          .map(this.suggestionToTracks)
          .map(p => p.catch(error => error))
      ).then(values => values.filter(v => !(v instanceof Error)))

      decorateSuggestions.push(
        new Promise((resolve, reject) => {
          userPromise.then(user => {
            tracksPromise
              .then(results => {
                const tracks = flatten(results)
                resolve({ user, tracks, suggestion })
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
    if (suggestion.type === 'track') {
      return this.getSuggestedTrackItem(suggestion.item)
    } else {
      return Promise.reject(
        new Error('Invalid suggestion type: ' + suggestion.type)
      )
    }
  }
}
