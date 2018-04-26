export const EVENT_LOCATION_CHANGED = 'EVENT_LOCATION_CHANGED'
export const EVENT_LOCATION_SELECTED = 'EVENT_LOCATION_SELECTED'
export const EVENT_LOCATION_POPULATED = 'EVENT_LOCATION_POPULATED'
export const EVENT_LOCATION_ERROR = 'EVENT_LOCATION_ERROR'

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
