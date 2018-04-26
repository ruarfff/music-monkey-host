import {
  EVENT_LOCATION_CHANGED,
  EVENT_LOCATION_POPULATED
} from './eventActions'
import initialState from './eventInitialState'

export default function events(state = initialState, { type, payload }) {
  switch (type) {
    case EVENT_LOCATION_CHANGED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          location: { ...state.savingEvent.location, address: payload }
        }
      }
    case EVENT_LOCATION_POPULATED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          location: { ...state.savingEvent.location, ...payload }
        }
      }
    default:
      return state
  }
}
