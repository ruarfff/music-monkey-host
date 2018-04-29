import {
  EVENT_LOCATION_CHANGED,
  EVENT_LOCATION_POPULATED,
  EVENT_CONTENT_UPDATED,
  EVENT_LOCATION_ERROR,
  EVENT_IMAGE_UPLOAD_ERROR,
  EVENT_IMAGE_UPLOADED,
  EVENT_SAVING_RESET,
  EVENT_SAVED,
  EVENT_SAVE_ERROR,
  SELECT_EXISTING_PLAYLIST_SELECTED,
  SELECT_EXISTING_PLAYLIST_CLOSED,
  CREATE_PLAYLIST_SELECTED,
  CREATE_PLAYLIST_CLOSED
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
        location: { address: 'test', latLng: {} }
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
        location: { address: 'test', latLng: {} }
      },
      errors: { location: null }
    })
  })

  it('should handle EVENT_LOCATION_POPULATED', () => {
    expect(
      events(initialState, {
        type: EVENT_LOCATION_POPULATED,
        payload: { address: 'test-address', latLng: { lat: '123', lng: '456' } }
      })
    ).toEqual({
      ...initialState,
      savingEvent: {
        ...initialState.savingEvent,
        location: {
          address: 'test-address',
          latLng: { lat: '123', lng: '456' }
        }
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

  it('should handle EVENT_SAVING_RESET', () => {
    expect(
      events(
        {
          ...initialState,
          savingEvent: { ...initialState.savingEvent, name: 'whataname' },
          showSavedDialogue: true
        },
        {
          type: EVENT_SAVING_RESET
        }
      )
    ).toEqual({ ...initialState })
  })

  it('should handle EVENT_SAVED', () => {
    const event = { ...initialState.savingEvent, name: 'save-me' }
    expect(
      events(
        {
          ...initialState,
          savingEvent: event
        },
        {
          type: EVENT_SAVED
        }
      )
    ).toEqual({
      ...initialState,
      events: [...initialState.events, event],
      savingEvent: event,
      showSavedDialogue: true
    })
  })

  it('should handle EVENT_SAVE_ERROR', () => {
    expect(
      events(initialState, {
        type: EVENT_SAVE_ERROR,
        payload: new Error('oh the humanity')
      })
    ).toEqual({
      ...initialState,
      errors: {
        ...initialState.errors,
        saving: new Error('oh the humanity')
      }
    })
  })

  it('should handle SELECT_EXISTING_PLAYLIST_SELECTED', () => {
    expect(
      events(initialState, {
        type: SELECT_EXISTING_PLAYLIST_SELECTED
      })
    ).toEqual({
      ...initialState,
      playlistInput: {
        ...initialState.playlistInput,
        isSelectingExistingPlaylist: true
      }
    })
  })

  it('should handle SELECT_EXISTING_PLAYLIST_CLOSED', () => {
    expect(
      events(
        {
          ...initialState,
          playlistInput: {
            ...initialState.playlistInput,
            isSelectingExistingPlaylist: true
          }
        },
        {
          type: SELECT_EXISTING_PLAYLIST_CLOSED
        }
      )
    ).toEqual({
      ...initialState,
      playlistInput: {
        ...initialState.playlistInput,
        isSelectingExistingPlaylist: false
      }
    })
  })

  it('should handle CREATE_PLAYLIST_SELECTED', () => {
    expect(
      events(initialState, {
        type: CREATE_PLAYLIST_SELECTED
      })
    ).toEqual({
      ...initialState,
      playlistInput: {
        ...initialState.playlistInput,
        isCreatingNewPlaylist: true
      }
    })
  })

  it('should handle CREATE_PLAYLIST_CLOSED', () => {
    expect(
      events(
        {
          ...initialState,
          playlistInput: {
            ...initialState.playlistInput,
            isCreatingNewPlaylist: true
          }
        },
        {
          type: CREATE_PLAYLIST_CLOSED
        }
      )
    ).toEqual({
      ...initialState,
      playlistInput: {
        ...initialState.playlistInput,
        isCreatingNewPlaylist: false
      }
    })
  })
})