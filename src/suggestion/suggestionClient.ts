import axios from 'axios'
import ISuggestion from './ISuggestion'
const serviceUrl = process.env.REACT_APP_MM_API_URL

export const getEventSuggestions = (eventId: string) => {
  return axios
    .get(serviceUrl + '/suggestions?eventId=' + eventId)
    .then(response => response.data)
}

export const saveSuggestion = (suggestion: ISuggestion) => {
  return axios.post(serviceUrl + '/suggestions', suggestion)
}
