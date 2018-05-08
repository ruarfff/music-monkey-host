import IAction from '../../Action'
import IEvent from '../IEvent'

export const EVENT_FETCH_BY_ID_INITIATED = 'EVENT_FETCH_BY_ID_INITIATED'
export const EVENT_FETCHED_BY_ID = 'EVENT_FETCHED_BY_ID'
export const EVENT_FETCH_BY_ID_ERROR = 'EVENT_FETCH_BY_ID_ERROR'
export const EVENT_TAB_INDEX_CHANGED = 'EVENT_TAB_INDEX_CHANGED'
export const EVENT_DELETE_SELECTED = 'EVENT_DELETE_SELECTED'
export const EVENT_DELETE_CLOSED = 'EVENT_DELETE_CLOSED'
export const EVENT_DELETE_INITIATED = 'EVENT_DELETE_INITIATED'
export const EVENT_DELETE_SUCCESSFUL = 'EVENT_DELETE_SUCCESSFUL'
export const EVENT_DELETE_FAILED = 'EVENT_DELETE_FAILED'

export const getEventById = (eventId: string): IAction => ({
  payload: eventId,
  type: EVENT_FETCH_BY_ID_INITIATED
})

export const onEventTabIndexChange = (index: number): IAction => ({
  payload: index,
  type: EVENT_TAB_INDEX_CHANGED
})

export const onEventDeleteSelected = (): IAction => ({
  type: EVENT_DELETE_SELECTED
})

export const onEventDeleteClosed = (): IAction => ({
  type: EVENT_DELETE_CLOSED
})

export const deleteEvent = (event: IEvent): IAction => ({
  type: EVENT_DELETE_INITIATED,
  payload: event
})