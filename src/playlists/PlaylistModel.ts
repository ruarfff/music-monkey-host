import { ILocation } from '../location/Location'

export interface IPlaylist {
  createdAt: any
  endDateTime: any
  eventId: string
  imageUrl: string
  location: ILocation
  name: string
  organizer: string
  startDateTime: any
  userId: string
  venue: string
}

export interface IPlaylistState {
  data?: IPlaylist
  error?: Error
  isLoading: boolean
}
