import { Moment } from 'moment'
import ILocation from '../location/ILocation'

export default interface IEvent {
  eventId?: string
  description?: string
  endDateTime: Moment
  eventCode?: string
  imageUrl?: string
  location?: ILocation
  name: string
  organizer: string
  playlistUrl: string
  startDateTime: any
  venue?: string
}
