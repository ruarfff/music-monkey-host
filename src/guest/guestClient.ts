import axios from 'axios'
import IEvent from '../event/IEvent'
import IEventGuest from '../event/IEventGuest'
const serviceUrl = process.env.REACT_APP_MM_API_URL

export const fetchEventGuests = (event: IEvent): Promise<IEventGuest[]> => {
  return axios
    .get(serviceUrl + '/events/' + event.eventId + '/guests', {
      withCredentials: true
    })
    .then(res => res.data as IEventGuest[])
}
