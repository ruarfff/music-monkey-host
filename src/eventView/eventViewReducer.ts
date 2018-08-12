import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import {
  EVENT_ACCEPT_SUGGESTED_TRACKS,
  EVENT_DELETE_CLOSED,
  EVENT_DELETE_FAILED,
  EVENT_DELETE_SELECTED,
  EVENT_DELETE_SUCCESSFUL,
  EVENT_FETCH_BY_ID_ERROR,
  EVENT_FETCH_BY_ID_INITIATED,
  EVENT_FETCHED_BY_ID,
  EVENT_INVITE_COPIED,
  EVENT_INVITE_COPY_ACKNOWLEDGED
} from './eventViewActions'
import initialState from './eventViewInitialState'
import IEventViewState from './IEventViewState'

export default function eventView(
  state: IEventViewState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case EVENT_FETCH_BY_ID_INITIATED:
      return {
        ...state,
        fetchError: undefined,
        loading: true
      }
    case EVENT_FETCHED_BY_ID:
      return {
        ...state,
        event: payload,
        loading: false
      }
    case EVENT_FETCH_BY_ID_ERROR:
      return {
        ...state,
        fetchError: payload,
        loading: false
      }
    case EVENT_DELETE_SELECTED:
      return {
        ...state,
        deleteSelected: true
      }
    case EVENT_DELETE_CLOSED:
      return {
        ...state,
        deleteSelected: false,
        deleteFailed: false,
        deleteSucceeded: false
      }
    case EVENT_DELETE_SUCCESSFUL:
      return {
        ...state,
        deleteSucceeded: true
      }
    case EVENT_DELETE_FAILED:
      return {
        ...state,
        deleteFailed: true
      }
    case EVENT_INVITE_COPIED:
      return {
        ...state,
        copiedToClipboard: true
      }
    case EVENT_INVITE_COPY_ACKNOWLEDGED:
      return {
        ...state,
        copiedToClipboard: false
      }
    case EVENT_ACCEPT_SUGGESTED_TRACKS:
      const suggestionMap = new Map(state.acceptedSuggestionsByTrackUri)
      if (payload) {
        payload.forEach((ds: IDecoratedSuggestion) => {
          suggestionMap.set(ds.track.uri, ds)
        })
      }
      return {
        ...state,
        acceptedSuggestionsByTrackUri: suggestionMap
      }
    default:
      return state
  }
}
