import { EVENT_LOCATION_SELECTED, EVENT_LOCATION_CHANGED } from './eventActions'
import initialState from './eventInitialState'

export default function events(state = initialState, { type, payload }) {
  switch (type) {
    case EVENT_LOCATION_SELECTED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          location: { ...payload }
        }
      }
    case EVENT_LOCATION_CHANGED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          location: { ...state.savingEvent.location, address: payload }
        }
      }
    default:
      return state
  }
}
