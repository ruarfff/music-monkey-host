import IEvent from '../event/IEvent'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import {
  EVENT_ACCEPT_SUGGESTED_TRACKS,
  EVENT_DELETE_CLOSED,
  EVENT_DELETE_FAILED,
  EVENT_DELETE_SELECTED,
  EVENT_DELETE_SUCCESSFUL,
  EVENT_FETCH_BY_ID_ERROR,
  EVENT_FETCH_BY_ID_INITIATED,
  EVENT_FETCHED_BY_ID
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

  it('should handle EVENT_ACCEPT_SUGGESTED_TRACKS', () => {
    const suggestion = {
      suggestion: { suggestionId: '123' },
      track: { uri: 'abc' } as ITrack
    } as IDecoratedSuggestion
    const suggestionByTrackId = new Map<string, IDecoratedSuggestion>()
    suggestionByTrackId.set('abc', suggestion)

    expect(
      eventView(initialState, {
        type: EVENT_ACCEPT_SUGGESTED_TRACKS,
        payload: [suggestion]
      })
    ).toEqual({
      ...initialState,
      acceptedSuggestionsByTrackUri: suggestionByTrackId
    })
  })
})
