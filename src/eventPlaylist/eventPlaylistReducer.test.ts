import IEvent from '../event/IEvent'
import IAction from '../IAction'
import {
  SAVE_EVENT_PLAYLIST,
  SAVE_EVENT_PLAYLIST_ERROR,
  SAVE_EVENT_PLAYLIST_SUCCESS
} from './eventPlaylistActions'
import initialState from './eventPlaylistInitialState'
import eventPlaylist from './eventPlaylistReducer'

describe('eventPlaylistReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(eventPlaylist(undefined, {} as IAction)).toEqual(initialState)
  })

  it('should handle SAVE_EVENT_PLAYLIST', () => {
    expect(
      eventPlaylist(initialState, {
        type: SAVE_EVENT_PLAYLIST
      })
    ).toEqual({
      ...initialState,
      savingEventPlaylist: true
    })
  })

  it('should handle SAVE_EVENT_PLAYLIST_SUCCESS', () => {
    expect(
      eventPlaylist(
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
      eventPlaylist(
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
