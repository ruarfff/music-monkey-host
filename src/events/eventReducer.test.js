import { EVENT_LOCATION_SELECTED, EVENT_LOCATION_CHANGED } from './eventActions'
import initialState from './eventInitialState'
import events from './eventReducer'

describe('eventReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(events(undefined, {})).toEqual(initialState)
  })

  it('should handle EVENT_LOCATION_SELECTED', () => {
    expect(events(initialState, { type: EVENT_LOCATION_SELECTED })).toEqual({
      ...initialState
    })
  })

  it('should handle EVENT_LOCATION_CHANGED', () => {
    expect(
      events(initialState, {
        type: EVENT_LOCATION_CHANGED
      })
    ).toEqual({
      ...initialState
    })
  })
})
