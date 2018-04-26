export const EVENT_LOCATION_CHANGED = 'EVENT_LOCATION_CHANGED'
export const EVENT_LOCATION_SELECTED = 'EVENT_LOCATION_SELECTED'

export const locationChanged = location => ({
  type: EVENT_LOCATION_CHANGED,
  payload: location
})

export const locationSelected = location => ({
  type: EVENT_LOCATION_SELECTED,
  payload: location
})
