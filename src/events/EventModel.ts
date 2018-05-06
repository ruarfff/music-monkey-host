import { ILocation } from '../location/Location'

export interface IEventErrors {
  location?: Error
  imageUpload?: Error
  saving?: Error
}

export interface IPlaylistInput {
  isCreatingNewPlaylist: boolean
  isSelectingExistingPlaylist: boolean
}

export interface IEvent {
  description?: string
  endDateTime?: any
  eventCode?: string
  imageUrl?: string
  location?: ILocation
  name: string
  organizer: string
  playlist: string
  startDateTime?: any
  venue?: string
}

export interface IEventState {
  errors?: IEventErrors
  events: IEvent[]
  playlistInput: IPlaylistInput
  savingEvent: IEvent
  selectedEvent?: IEvent
  showSavedDialogue: boolean
}
