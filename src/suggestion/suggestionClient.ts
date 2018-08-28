import axios from 'axios'
import ISuggestion from './ISuggestion'
const serviceUrl = process.env.REACT_APP_MM_API_URL

export const getEventSuggestions = (eventId: string) => {
  return axios
    .get(serviceUrl + '/suggestions?eventId=' + eventId, {
      withCredentials: true
    })
    .then(response => response.data)
}

export const acceptSuggestions = (
  eventId: string,
  suggestions: ISuggestion[]
) => {
  return axios.post(
    serviceUrl + '/suggestions/' + eventId + '/accept',
    suggestions,
    { withCredentials: true }
  )
}

export const rejectSuggestion = (suggestion: ISuggestion) => {
  return axios.post(
    serviceUrl + '/suggestions/' + suggestion.suggestionId + '/reject',
    {},
    { withCredentials: true }
  )
}
