import moment from 'moment'

export default {
  savingEvent: {
    name: '',
    organizer: '',
    imageUrl: '',
    description: '',
    venue: '',
    location: { address: '', latLng: {} },
    startDateTime: moment()
      .add(2, 'hours')
      .startOf('hour'),
    endDateTime: moment()
      .add(3, 'hours')
      .startOf('hour'),
    eventCode: '',
    playlist: ''
  },
  selectedEvent: {},
  events: [],
  showSavedDialogue: false,
  playlistInput: {
    isSelectingExistingPlaylist: false,
    isCreatingNewPlaylist: false
  },
  errors: { location: null, imageUpload: null, saving: null }
}
