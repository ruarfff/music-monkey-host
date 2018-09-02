import * as moment from 'moment'
import IEventSettings from './IEventSettings'
import IEventState from './IEventState'

export default {
  errors: {
    location: undefined,
    imageUpload: undefined,
    saving: undefined,
    playlistCreation: undefined,
    fetchEvents: undefined
  },
  events: [],
  playlistInput: {
    isCreatingNewPlaylist: false,
    isSelectingExistingPlaylist: false
  },
  savingEvent: {
    description: '',
    endDateTime: moment()
      .add(3, 'hours')
      .startOf('hour'),
    eventCode: '',
    imageUrl: '',
    location: { address: '', latLng: { lat: 0, lng: 0 } },
    name: '',
    organizer: '',
    playlistUrl: '',
    startDateTime: moment()
      .add(2, 'hours')
      .startOf('hour'),
    venue: '',
    invites: [],
    settings: {} as IEventSettings
  },
  eventsLoading: false,
  showSavedDialogue: false
} as IEventState
