import { EVENT_LOCATION_SELECTED, EVENT_LOCATION_CHANGED } from './eventActions'
import initialState from './eventInitialState'
import events from './eventReducer'

describe('eventReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(events(undefined, {})).toEqual(initialState)
  })

  it('should handle EVENT_LOCATION_SELECTED', () => {
    expect(
      events(initialState, {
        type: EVENT_LOCATION_SELECTED,
        payload: { address: 'test-address', latLng: 'test-latlng' }
      })
    ).toEqual({
      ...initialState,
      savingEvent: {
        ...initialState.savingEvent,
        location: { address: 'test-address', latLng: 'test-latlng' }
      }
    })
  })

  it('should handle EVENT_LOCATION_CHANGED', () => {
    expect(
      events(initialState, {
        type: EVENT_LOCATION_CHANGED,
        payload: 'test'
      })
    ).toEqual({
      ...initialState,
      savingEvent: {
        ...initialState.savingEvent,
        location: { address: 'test', latLng: '' }
      }
    })
  })
})
