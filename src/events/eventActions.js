export const EVENT_LOCATION_CHANGED = 'EVENT_LOCATION_CHANGED'
export const EVENT_LOCATION_SELECTED = 'EVENT_LOCATION_SELECTED'
export const EVENT_LOCATION_POPULATED = 'EVENT_LOCATION_POPULATED'
export const EVENT_LOCATION_ERROR = 'EVENT_LOCATION_ERROR'
export const EVENT_CONTENT_UPDATED = 'EVENT_CONTENT_UPDATED'
export const EVENT_IMAGE_UPLOADED = 'EVENT_IMAGE_UPLOADED'
export const EVENT_IMAGE_UPLOAD_ERROR = 'EVENT_IMAGE_UPLOAD_ERROR'

export const locationChanged = address => ({
  type: EVENT_LOCATION_CHANGED,
  payload: address
})

export const locationSelected = address => ({
  type: EVENT_LOCATION_SELECTED,
  payload: address
})

export const locationPopulated = location => ({
  type: EVENT_LOCATION_POPULATED,
  payload: location
})

export const locationError = err => ({
  type: EVENT_LOCATION_ERROR,
  payload: err
})

export const eventContentUpdated = event => ({
  type: EVENT_CONTENT_UPDATED,
  payload: event
})

export const eventImageUploaded = imageUrl => ({
  type: EVENT_IMAGE_UPLOADED,
  payload: imageUrl
})

export const eventImageUploadError = err => ({
  type: EVENT_IMAGE_UPLOAD_ERROR,
  payload: err
})
