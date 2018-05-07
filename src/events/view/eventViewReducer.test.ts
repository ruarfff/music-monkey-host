import IAction from '../../Action'
import IEvent from '../IEvent'
import {
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
})
