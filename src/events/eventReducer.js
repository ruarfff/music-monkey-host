import { EVENT_LOCATION_SELECTED, EVENT_LOCATION_CHANGED } from './eventActions'
import initialState from './eventInitialState'

export default function events(state = initialState, { type, payload }) {
  switch (type) {
    case EVENT_LOCATION_SELECTED:
      return { ...initialState }
    case EVENT_LOCATION_CHANGED:
      return { ...initialState }
    default:
      return state
  }
}
