export const EVENT_LOCATION_CHANGED = 'EVENT_LOCATION_CHANGED'
export const EVENT_LOCATION_SELECTED = 'EVENT_LOCATION_SELECTED'
export const EVENT_LOCATION_POPULATED = 'EVENT_LOCATION_POPULATED'
export const EVENT_LOCATION_ERROR = 'EVENT_LOCATION_ERROR'
export const EVENT_CONTENT_UPDATED = 'EVENT_CONTENT_UPDATED'
export const EVENT_IMAGE_UPLOADED = 'EVENT_IMAGE_UPLOADED'
export const EVENT_IMAGE_UPLOAD_ERROR = 'EVENT_IMAGE_UPLOAD_ERROR'
export const EVENT_SAVE_INITIATED = 'EVENT_SAVE_INITIATED'
export const EVENT_SAVED = 'EVENT_SAVED'
export const EVENT_SAVE_ERROR = 'EVENT_SAVE_ERROR'
export const EVENT_SAVING_RESET = 'EVENT_SAVING_RESET'
export const EVENT_CREATE_PLAYLIST_INITIATED = 'EVENT_CREATE_PLAYLIST_INITIATED'
export const EVENT_PLAYLIST_CREATED = 'EVENT_PLAYLIST_CREATED'
export const EVENT_PLAYLIST_CREATION_ERROR = 'EVENT_PLAYLIST_CREATION_ERROR'
export const EVENT_CREATE_FORM_INITIALIZED = 'EVENT_CREATE_FORM_INITIALIZED'
export const EVENTS_FETCH_INITIATED = 'EVENTS_FETCH_INITIATED'
export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENTS_FETCH_ERROR = 'EVENTS_FETCH_ERROR'

export const SELECT_EXISTING_PLAYLIST_SELECTED =
  'SELECT_EXISTING_PLAYLIST_SELECTED'
export const SELECT_EXISTING_PLAYLIST_CLOSED = 'SELECT_EXISTING_PLAYLIST_CLOSED'

export const CREATE_PLAYLIST_SELECTED = 'CREATE_PLAYLIST_SELECTED'
export const CREATE_PLAYLIST_CLOSED = 'CREATE_PLAYLIST_CLOSED'

export const locationChanged = address => ({
  payload: address,
  type: EVENT_LOCATION_CHANGED
})

export const locationSelected = address => ({
  payload: address,
  type: EVENT_LOCATION_SELECTED
})

export const eventContentUpdated = event => ({
  payload: event,
  type: EVENT_CONTENT_UPDATED
})

export const eventImageUploaded = imageUrl => ({
  payload: imageUrl,
  type: EVENT_IMAGE_UPLOADED
})

export const eventImageUploadError = err => ({
  payload: err,
  type: EVENT_IMAGE_UPLOAD_ERROR
})

export const saveEvent = event => ({
  payload: event,
  type: EVENT_SAVE_INITIATED
})

export const eventSavingReset = () => ({
  type: EVENT_SAVING_RESET
})

export const eventSaved = event => ({
  payload: event,
  type: EVENT_SAVED
})

export const selectExistingPlaylist = () => ({
  type: SELECT_EXISTING_PLAYLIST_SELECTED
})

export const closeExistingPlaylist = () => ({
  type: SELECT_EXISTING_PLAYLIST_CLOSED
})

export const selectCreatePlaylist = () => ({
  type: CREATE_PLAYLIST_SELECTED
})

export const closeCreatePlaylist = () => ({
  type: CREATE_PLAYLIST_CLOSED
})

export const createEventPlaylist = playlistDetails => ({
  payload: playlistDetails,
  type: EVENT_CREATE_PLAYLIST_INITIATED
})

export const initializeCreateForm = (event, user) => ({
  payload: { event, user },
  type: EVENT_CREATE_FORM_INITIALIZED
})

export const getEvents = userId => ({
  payload: userId,
  type: EVENTS_FETCH_INITIATED
})
