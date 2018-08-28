import axios from 'axios'
import * as moment from 'moment'
import IEvent from './IEvent'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export const getEvents = () => {
  return axios
    .get(serviceUrl + '/events', {
      withCredentials: true
    })
    .then(response =>
      response.data.map((event: IEvent) => ({
        ...event,
        endDateTime: moment(event.endDateTime),
        startDateTime: moment(event.startDateTime)
      }))
    )
}

export const getEventById = (eventId: string) => {
  return axios
    .get(serviceUrl + '/events/' + eventId, {
      withCredentials: true
    })
    .then(response => ({
      ...response.data,
      endDateTime: moment(response.data.endDateTime),
      startDateTime: moment(response.data.startDateTime)
    }))
}

export const deleteEvent = (eventId: string) => {
  return axios.delete(serviceUrl + '/events/' + eventId)
}
