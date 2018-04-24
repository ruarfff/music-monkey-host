import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_ERROR
} from './playlistActions'
import initialState from './playlistInitialState'
import playlist from './playlistReducer'

it('should return the initial state when no action matches', () => {
  expect(playlist(undefined, {})).toEqual(initialState)
})

it('should handle FETCH_PLAYLIST', () => {
  expect(playlist(initialState, { type: FETCH_PLAYLISTS })).toEqual({
    ...initialState,
    isLoading: true
  })
})

it('should handle FETCH_PLAYLIST_SUCCESS', () => {
  expect(
    playlist(
      { ...initialState, isLoading: true },
      {
        type: FETCH_PLAYLISTS_SUCCESS,
        payload: {
          id: 'test-id'
        }
      }
    )
  ).toEqual({
    ...initialState,
    data: { id: 'test-id' },
    isLoading: false
  })
})

it('should handle FETCH_PLAYLIST_ERROR', () => {
  expect(
    playlist(initialState, {
      type: FETCH_PLAYLISTS_ERROR,
      payload: new Error('Oh dear :(')
    })
  ).toEqual({ ...initialState, error: new Error('Oh dear :(') })
})
