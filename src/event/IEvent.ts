import { Moment } from 'moment'
import ILocation from '../location/ILocation'
import IPlaylist from '../playlist/IPlaylist'
import IEventGuest from './IEventGuest'

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
  playlist?: IPlaylist
  startDateTime: any
  venue?: string
  invites?: string[]
  guests?: IEventGuest[]
}
