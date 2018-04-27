export default {
  savingEvent: { location: { address: '', latLng: {} } },
  selectedEvent: {
    name: '',
    organizer: '',
    imageUrl: '',
    description: '',
    venue: '',
    location: { address: '', latLng: {} },
    startDateTime: '',
    endDateTime: '',
    eventCode: '',
    playlist: ''
  },
  events: [],
  showSavedDialogue: false,
  errors: { location: null, imageUpload: null, saving: null }
}
