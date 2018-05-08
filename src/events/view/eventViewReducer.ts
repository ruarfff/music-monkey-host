import IAction from '../../Action'
import {
  EVENT_DELETE_CLOSED,
  EVENT_DELETE_FAILED,
  EVENT_DELETE_SELECTED,
  EVENT_DELETE_SUCCESSFUL,
  EVENT_FETCH_BY_ID_ERROR,
  EVENT_FETCH_BY_ID_INITIATED,
  EVENT_FETCHED_BY_ID,
  EVENT_TAB_INDEX_CHANGED
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
    case EVENT_TAB_INDEX_CHANGED:
      return {
        ...state,
        eventTabIndex: payload
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
    default:
      return state
  }
}