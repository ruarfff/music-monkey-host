import {
  EVENT_LOCATION_CHANGED,
  EVENT_LOCATION_POPULATED,
  EVENT_CONTENT_UPDATED,
  EVENT_IMAGE_UPLOADED,
  EVENT_LOCATION_ERROR,
  EVENT_IMAGE_UPLOAD_ERROR,
  EVENT_SAVING_RESET,
  EVENT_SAVED,
  EVENT_SAVE_ERROR
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
        },
        errors: { ...state.errors, location: null }
      }
    case EVENT_LOCATION_POPULATED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          location: { ...state.savingEvent.location, ...payload }
        }
      }
    case EVENT_LOCATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          location: payload
        }
      }
    case EVENT_CONTENT_UPDATED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          ...payload
        }
      }
    case EVENT_IMAGE_UPLOADED:
      return {
        ...state,
        savingEvent: {
          ...state.savingEvent,
          imageUrl: payload
        }
      }
    case EVENT_IMAGE_UPLOAD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          imageUpload: payload
        }
      }
    case EVENT_SAVING_RESET:
      return {
        ...state,
        savingEvent: {
          ...initialState.savingEvent
        }
      }
    case EVENT_SAVED:
      return {
        ...state,
        events: [...state.events, state.savingEvent]
      }
    case EVENT_SAVE_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          saving: payload
        }
      }
    default:
      return state
  }
}
