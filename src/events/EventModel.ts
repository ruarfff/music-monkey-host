import { Moment } from 'moment';
import { ILocation } from '../location/Location'

export interface IEventErrors {
  location?: Error
  imageUpload?: Error
  saving?: Error
  fetchEvents?: Error
  fetchEvent?: Error
  playlistCreation?: Error
}

export interface IPlaylistInput {
  isCreatingNewPlaylist: boolean
  isSelectingExistingPlaylist: boolean
}

export interface IEvent {
  eventId?: string
  description?: string
  endDateTime: Moment
  eventCode?: string
  imageUrl?: string
  location?: ILocation
  name: string
  organizer: string
  playlist: string
  startDateTime: any
  venue?: string
}

export interface IEventState {
  errors?: IEventErrors
  events: IEvent[]
  playlistInput: IPlaylistInput
  savingEvent: IEvent
  selectedEvent?: IEvent
  eventsLoading: boolean
  eventLoading: boolean
  showSavedDialogue: boolean
}
