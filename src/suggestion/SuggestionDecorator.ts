import axios from 'axios'
import { find, flatten, forOwn, groupBy } from 'lodash'
import * as spotifyUri from 'spotify-uri'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export default class SuggestionDecorator {
  public decorateSuggestions = (suggestions: ISuggestion[]) => {
    return this.decorateSuggestionsWithTracks(suggestions)
      .then(suggestionsWithTracks => {
        const groupedByUserId = groupBy(
          suggestionsWithTracks,
          'suggestion.userId'
        )

        const decorateSuggestionPromises: any[] = []
        forOwn(groupedByUserId, (usersSuggestions, userId) => {
          const decorateWithUserPromise = this.getUser(userId).then(user =>
            usersSuggestions.map(
              (suggestionWithTrack: IDecoratedSuggestion) => ({
                ...suggestionWithTrack,
                user
              })
            )
          )
          decorateSuggestionPromises.push(decorateWithUserPromise)
        })
        return decorateSuggestionPromises.map(p =>
          p.catch((error: Error) => error)
        )
      })
      .then(decorateSuggestionPromises =>
        Promise.all(decorateSuggestionPromises)
          .then(values => values.filter(v => !(v instanceof Error)))
          .then(flatten)
      )
  }
  private getUser = (userId: string) => {
    return axios
      .get(serviceUrl + '/users/' + userId)
      .then(response => response.data)
  }

  private decorateSuggestionsWithTracks = (suggestions: ISuggestion[]) => {
    const token = localStorage.get(accessTokenKey)
    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(token)
    const suggestionsGroupedByType = groupBy(suggestions, 'type')
    const trackSuggestionPromises = (suggestionsGroupedByType.track || [])
      .map(trackSuggestion => {
        const trackDetails = spotifyUri(trackSuggestion.trackUri)
        return spotifyApi
          .getTrack(trackDetails.id)
          .then(track => ({ suggestion: trackSuggestion, track }))
      })
      .map(p => p.catch(error => error))

    const playlistSuggestionPromises: any[] = []

    if (suggestionsGroupedByType.playlist) {
      forOwn(
        groupBy(suggestionsGroupedByType.playlist, 'playlistUri'),
        (playlistSuggestions, playlistUri) => {
          const playlistDetails = spotifyUri(playlistUri)
          playlistSuggestionPromises.push(
            spotifyApi
              .getPlaylist(playlistDetails.user, playlistDetails.id)
              .then(playlist => {
                const decoratedSuggestions: any[] = []
                playlist.tracks.items.map(item => {
                  const matchingSuggestion = find(playlistSuggestions, {
                    trackUri: item.track.uri
                  })
                  if (matchingSuggestion) {
                    decoratedSuggestions.push({
                      suggestion: matchingSuggestion,
                      track: item.track
                    })
                  }
                })
                return decoratedSuggestions
              })
          )
        }
      )
    }
    return Promise.all([
      ...trackSuggestionPromises,
      ...playlistSuggestionPromises
    ])
      .then(values => values.filter(v => !(v instanceof Error)))
      .then(flatten)
  }
}
