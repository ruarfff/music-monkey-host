import Action from '../../Action'

export const EVENT_FETCH_BY_ID_INITIATED = 'EVENT_FETCH_BY_ID_INITIATED'
export const EVENT_FETCHED_BY_ID = 'EVENT_FETCHED_BY_ID'
export const EVENT_FETCH_BY_ID_ERROR = 'EVENT_FETCH_BY_ID_ERROR'
export const EVENT_TAB_INDEX_CHANGED = 'EVENT_TAB_INDEX_CHANGED'
export const EVENT_DELETE_SELECTED = 'EVENT_DELETE_SELECTED'
export const EVENT_DELETE_CLOSED = 'EVENT_DELETE_CLOSED'

export const getEventById = (eventId: string): Action => ({
  payload: eventId,
  type: EVENT_FETCH_BY_ID_INITIATED
})

export const onEventTabIndexChange = (index: number): Action => ({
  payload: index,
  type: EVENT_TAB_INDEX_CHANGED
})

export const onEventDeleteSelected = (): Action => ({
  type: EVENT_DELETE_SELECTED
})

export const onEventDeleteClosed = (): Action => ({
  type: EVENT_DELETE_CLOSED
})
