import IEvent from '../event/IEvent'
import IAction from '../IAction'
import {
  EVENT_DELETE_CLOSED,
  EVENT_DELETE_FAILED,
  EVENT_DELETE_SELECTED,
  EVENT_DELETE_SUCCESSFUL,
  EVENT_FETCH_BY_ID_ERROR,
  EVENT_FETCH_BY_ID_INITIATED,
  EVENT_FETCHED_BY_ID,
  SAVE_EVENT_PLAYLIST,
  SAVE_EVENT_PLAYLIST_ERROR,
  SAVE_EVENT_PLAYLIST_SUCCESS
} from './eventViewActions'
import initialState from './eventViewInitialState'
import eventView from './eventViewReducer'

describe('eventViewReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(eventView(undefined, {} as IAction)).toEqual(initialState)
  })

  it('should handle EVENT_FETCH_BY_ID_INITIATED', () => {
    expect(
      eventView(initialState, {
        type: EVENT_FETCH_BY_ID_INITIATED
      })
    ).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('should handle EVENT_FETCHED_BY_ID', () => {
    expect(
      eventView(
        { ...initialState, loading: true },
        {
          type: EVENT_FETCHED_BY_ID,
          payload: {} as IEvent
        }
      )
    ).toEqual({
      ...initialState,
      loading: false,
      event: {} as IEvent
    })
  })

  it('should handle EVENT_FETCH_BY_ID_ERROR', () => {
    expect(
      eventView(initialState, {
        type: EVENT_FETCH_BY_ID_ERROR,
        payload: new Error('event err')
      })
    ).toEqual({
      ...initialState,
      fetchError: new Error('event err')
    })
  })

  it('should handle EVENT_DELETE_SELECTED', () => {
    expect(
      eventView(initialState, {
        type: EVENT_DELETE_SELECTED
      })
    ).toEqual({
      ...initialState,
      deleteSelected: true
    })
  })

  it('should handle EVENT_DELETE_CLOSED', () => {
    expect(
      eventView(
        {
          ...initialState,
          deleteSelected: true,
          deleteFailed: true,
          deleteSucceeded: true
        },
        {
          type: EVENT_DELETE_CLOSED
        }
      )
    ).toEqual({
      ...initialState,
      deleteSelected: false,
      deleteFailed: false,
      deleteSucceeded: false
    })
  })

  it('should handle EVENT_DELETE_SUCCESSFUL', () => {
    expect(
      eventView(
        { ...initialState, deleteSucceeded: false },
        {
          type: EVENT_DELETE_SUCCESSFUL
        }
      )
    ).toEqual({ ...initialState, deleteSucceeded: true })
  })

  it('should handle EVENT_DELETE_FAILED', () => {
    expect(
      eventView(
        { ...initialState, deleteFailed: false },
        {
          type: EVENT_DELETE_FAILED
        }
      )
    ).toEqual({ ...initialState, deleteFailed: true })
  })

  it('should handle SAVE_EVENT_PLAYLIST', () => {
    expect(
      eventView(initialState, {
        type: SAVE_EVENT_PLAYLIST
      })
    ).toEqual({
      ...initialState,
      savingEventPlaylist: true
    })
  })

  it('should handle SAVE_EVENT_PLAYLIST_SUCCESS', () => {
    expect(
      eventView(
        {
          ...initialState,
          savingEventPlaylist: true
        },
        {
          type: SAVE_EVENT_PLAYLIST_SUCCESS
        }
      )
    ).toEqual({
      ...initialState,
      savingEventPlaylist: false
    })
  })

  it('should handle SAVE_EVENT_PLAYLIST_ERROR', () => {
    expect(
      eventView(
        {
          ...initialState,
          savingEventPlaylist: true
        },
        {
          type: SAVE_EVENT_PLAYLIST_ERROR,
          payload: new Error('oh-the-humanity')
        }
      )
    ).toEqual({
      ...initialState,
      savingEventPlaylist: false,
      saveEventPlaylistError: new Error('oh-the-humanity')
    })
  })
})
