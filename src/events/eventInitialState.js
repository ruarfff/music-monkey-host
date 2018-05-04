import moment from 'moment'

export default {
  errors: { location: null, imageUpload: null, saving: null },
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
    playlist: '',
    startDateTime: moment()
      .add(2, 'hours')
      .startOf('hour'),
    venue: ''
  },
  selectedEvent: {},
  showSavedDialogue: false
}
