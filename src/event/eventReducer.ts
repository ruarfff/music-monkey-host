import Action from '../IAction'
import {
  CREATE_PLAYLIST_CLOSED,
  CREATE_PLAYLIST_SELECTED,
  EVENT_CONTENT_UPDATED,
  EVENT_CREATE_FORM_INITIALIZED,
  EVENT_IMAGE_UPLOAD_ERROR,
  EVENT_IMAGE_UPLOADED,
  EVENT_LOCATION_CHANGED,
  EVENT_LOCATION_ERROR,
  EVENT_LOCATION_POPULATED,
  EVENT_PLAYLIST_CREATION_ERROR,
  EVENT_SAVE_ERROR,
  EVENT_SAVED,
  EVENT_SAVING_RESET,
  EVENTS_FETCH_ERROR,
  EVENTS_FETCH_INITIATED,
  EVENTS_FETCHED,
  SELECT_EXISTING_PLAYLIST_CLOSED,
  SELECT_EXISTING_PLAYLIST_SELECTED
} from './eventActions'
import initialState from './eventInitialState'
import IEventState from './IEventState'

export default function event(
  state: IEventState = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case EVENT_LOCATION_CHANGED:
      return {
        ...state,
        errors: { ...state.errors, location: undefined },
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
        },
        showSavedDialogue: false
      }
    case EVENT_SAVED:
      return {
        ...state,
        events: [...state.events, payload],
        showSavedDialogue: true
      }
    case EVENT_SAVE_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          saving: payload
        }
      }
    case SELECT_EXISTING_PLAYLIST_SELECTED:
      return {
        ...state,
        playlistInput: {
          ...state.playlistInput,
          isSelectingExistingPlaylist: true
        }
      }
    case SELECT_EXISTING_PLAYLIST_CLOSED:
      return {
        ...state,
        playlistInput: {
          ...state.playlistInput,
          isSelectingExistingPlaylist: false
        }
      }
    case CREATE_PLAYLIST_SELECTED:
      return {
        ...state,
        playlistInput: {
          ...state.playlistInput,
          isCreatingNewPlaylist: true
        }
      }
    case CREATE_PLAYLIST_CLOSED:
      return {
        ...state,
        playlistInput: {
          ...state.playlistInput,
          isCreatingNewPlaylist: false
        }
      }
    case EVENT_PLAYLIST_CREATION_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          playlistCreation: payload
        }
      }
    case EVENT_CREATE_FORM_INITIALIZED:
      return {
        ...state,
        savingEvent: {
          ...payload.event,
          organizer: payload.user.displayName,
          userId: payload.user.userId
        }
      }
    case EVENTS_FETCH_INITIATED:
      return {
        ...state,
        eventsLoading: true
      }
    case EVENTS_FETCHED:
      return {
        ...state,
        events: payload,
        eventsLoading: false
      }
    case EVENTS_FETCH_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetchEvents: payload
        },
        eventsLoading: false
      }
    default:
      return state
  }
}
