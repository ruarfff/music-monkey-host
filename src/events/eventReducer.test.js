import {
  EVENT_LOCATION_CHANGED,
  EVENT_LOCATION_POPULATED,
  EVENT_CONTENT_UPDATED,
  EVENT_LOCATION_ERROR,
  EVENT_IMAGE_UPLOAD_ERROR,
  EVENT_IMAGE_UPLOADED
} from './eventActions'
import initialState from './eventInitialState'
import events from './eventReducer'

describe('eventReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(events(undefined, {})).toEqual(initialState)
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

  it('should reset errors when EVENT_LOCATION_CHANGED', () => {
    expect(
      events(
        { ...initialState, errors: { location: new Error('wut') } },
        {
          type: EVENT_LOCATION_CHANGED,
          payload: 'test'
        }
      )
    ).toEqual({
      ...initialState,
      savingEvent: {
        ...initialState.savingEvent,
        location: { address: 'test', latLng: '' }
      },
      errors: { location: null }
    })
  })

  it('should handle EVENT_LOCATION_POPULATED', () => {
    expect(
      events(initialState, {
        type: EVENT_LOCATION_POPULATED,
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

  it('should handle EVENT_LOCATION_ERROR', () => {
    expect(
      events(initialState, {
        type: EVENT_LOCATION_ERROR,
        payload: new Error('so bad')
      })
    ).toEqual({
      ...initialState,
      errors: { ...initialState.errors, location: new Error('so bad') }
    })
  })

  it('should hande EVENT_IMAGE_UPLOADED', () => {
    expect(
      events(initialState, {
        type: EVENT_IMAGE_UPLOADED,
        payload: 'image_url'
      })
    ).toEqual({
      ...initialState,
      savingEvent: { ...initialState.savingEvent, imageUrl: 'image_url' }
    })
  })

  it('should handle EVENT_IMAGE_UPLOAD_ERROR', () => {
    expect(
      events(initialState, {
        type: EVENT_IMAGE_UPLOAD_ERROR,
        payload: new Error('how could this happen?')
      })
    ).toEqual({
      ...initialState,
      errors: {
        ...initialState.errors,
        imageUpload: new Error('how could this happen?')
      }
    })
  })

  it('should handle EVENT_CONTENT_UPDATED and add a new value', () => {
    expect(
      events(initialState, {
        type: EVENT_CONTENT_UPDATED,
        payload: { name: 'test-name' }
      })
    ).toEqual({
      ...initialState,
      savingEvent: { ...initialState.savingEvent, name: 'test-name' }
    })
  })

  it('should handle EVENT_CONTENT_UPDATED and update an existing value', () => {
    expect(
      events(
        {
          ...initialState,
          savingEvent: { ...initialState.savingEvent, organizer: 'this-person' }
        },
        {
          type: EVENT_CONTENT_UPDATED,
          payload: { organizer: 'other' }
        }
      )
    ).toEqual({
      ...initialState,
      savingEvent: { ...initialState.savingEvent, organizer: 'other' }
    })
  })
})
