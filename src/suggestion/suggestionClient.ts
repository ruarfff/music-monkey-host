import axios from 'axios'
import ISuggestion from './ISuggestion'
import ISuggestionQuery from './ISuggestionQuery'
import SuggestionDecorator from './SuggestionDecorator'

const serviceUrl = process.env.REACT_APP_MM_API_URL
const suggestionDecorator = new SuggestionDecorator()

export const getSuggestions = (suggestionQuery: ISuggestionQuery) => {
  return axios
    .get(
      serviceUrl +
        '/suggestions?userId=' +
        suggestionQuery.userId +
        '&eventId=' +
        suggestionQuery.eventId
    )
    .then(response => response.data)
}

export const getEventSuggestions = (eventId: string) => {
  return axios
    .get(serviceUrl + '/suggestions?eventId=' + eventId)
    .then(response => suggestionDecorator.decorateSuggestions(response.data))
}

export const saveSuggestion = (suggestion: ISuggestion) => {
  return axios.post(serviceUrl + '/suggestions', suggestion)
}

export const deleteSuggestion = (suggestion: ISuggestion) => {
  return axios.delete(serviceUrl + '/suggestions/' + suggestion.suggestionId)
}
