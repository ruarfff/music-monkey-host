import IEvent from '../event/IEvent'
import IAction from '../IAction'

export const EVENT_FETCH_BY_ID_INITIATED = 'EVENT_FETCH_BY_ID_INITIATED'
export const EVENT_FETCH_BY_ID_NO_LOADING_INITIATED =
  'EVENT_FETCH_BY_ID_NO_LOADING_INITIATED'
export const EVENT_FETCHED_BY_ID = 'EVENT_FETCHED_BY_ID'
export const EVENT_FETCH_BY_ID_ERROR = 'EVENT_FETCH_BY_ID_ERROR'
export const EVENT_DELETE_SELECTED = 'EVENT_DELETE_SELECTED'
export const EVENT_DELETE_CLOSED = 'EVENT_DELETE_CLOSED'
export const EVENT_DELETE_INITIATED = 'EVENT_DELETE_INITIATED'
export const EVENT_DELETE_SUCCESSFUL = 'EVENT_DELETE_SUCCESSFUL'
export const EVENT_DELETE_FAILED = 'EVENT_DELETE_FAILED'
export const EVENT_INVITE_COPIED = 'EVENT_INVITE_COPIED'
export const EVENT_INVITE_COPY_ACKNOWLEDGED = 'EVENT_INVITE_COPY_ACKNOWLEDGED'

export const REFRESH_EVENT_PLAYLIST = 'REFRESH_EVENT_PLAYLIST'
export const REFRESH_EVENT_PLAYLIST_SUCCESS = 'REFRESH_EVENT_PLAYLIST_SUCCESS'
export const REFRESH_EVENT_PLAYLIST_FAILED = 'REFRESH_EVENT_PLAYLIST_FAILED'

export const TOGGLE_DYNAMIC_VOTING = 'TOGGLE_DYNAMIC_VOTING'
export const TOGGLE_DYNAMIC_VOTING_ERROR = 'TOGGLE_DYNAMIC_VOTING_ERROR'
export const TOGGLE_AUTO_ACCEPT_SUGGESTIONS = 'TOGGLE_AUTO_ACCEPT_SUGGESTIONS'
export const TOGGLE_AUTO_ACCEPT_SUGGESTIONS_ERROR =
  'TOGGLE_AUTO_ACCEPT_SUGGESTIONS_ERROR'
export const TOGGLE_SUGGESTING_PLAYLISTS = 'TOGGLE_SUGGESTING_PLAYLISTS'
export const TOGGLE_SUGGESTING_PLAYLISTS_ERROR =
  'TOGGLE_SUGGESTING_PLAYLISTS_ERROR'

export const getEventById = (eventId: string): IAction => ({
  payload: eventId,
  type: EVENT_FETCH_BY_ID_INITIATED
})

export const getEventByIdNoLoading = (eventId: string): IAction => ({
  payload: eventId,
  type: EVENT_FETCH_BY_ID_NO_LOADING_INITIATED
})

export const onEventDeleteSelected = (): IAction => ({
  type: EVENT_DELETE_SELECTED
})

export const onEventDeleteClosed = (): IAction => ({
  type: EVENT_DELETE_CLOSED
})

export const deleteEvent = (event: IEvent): IAction => ({
  type: EVENT_DELETE_INITIATED,
  payload: event.eventId
})

export const copyEventInvite = (): IAction => ({
  type: EVENT_INVITE_COPIED
})

export const acknowledgeEventInviteCopied = (): IAction => ({
  type: EVENT_INVITE_COPY_ACKNOWLEDGED
})

export const toggleDynamicVoting = (event: IEvent): IAction => ({
  type: TOGGLE_DYNAMIC_VOTING,
  payload: event
})

export const toggleAutoAcceptSuggestions = (event: IEvent): IAction => ({
  type: TOGGLE_AUTO_ACCEPT_SUGGESTIONS,
  payload: event
})

export const toggleSuggestingPlaylists = (event: IEvent): IAction => ({
  type: TOGGLE_SUGGESTING_PLAYLISTS,
  payload: event
})
