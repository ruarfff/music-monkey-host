import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import {
  PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
  PRE_GAME_TAB_INDEX_CHANGED,
  SAVE_PRE_GAME_PLAYLIST,
  SAVE_PRE_GAME_PLAYLIST_ERROR,
  SAVE_PRE_GAME_PLAYLIST_SUCCESS
} from './pregameActions'
import initialState from './preGameInitialState'
import preGameView from './preGameReducer'

describe('preGameViewReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(preGameView(undefined, {} as IAction)).toEqual(initialState)
  })

  it('should handle PRE_GAME_TAB_INDEX_CHANGED', () => {
    expect(
      preGameView(initialState, {
        type: PRE_GAME_TAB_INDEX_CHANGED,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      preGameTabIndex: 2
    })
  })

  it('should handle SAVE_PRE_GAME_PLAYLIST', () => {
    expect(
      preGameView(initialState, {
        type: SAVE_PRE_GAME_PLAYLIST
      })
    ).toEqual({
      ...initialState,
      saving: true
    })
  })

  it('should handle SAVE_PRE_GAME_PLAYLIST_SUCCESS', () => {
    expect(
      preGameView(
        {
          ...initialState,
          saving: true
        },
        {
          type: SAVE_PRE_GAME_PLAYLIST_SUCCESS
        }
      )
    ).toEqual({
      ...initialState,
      saving: false
    })
  })

  it('should handle SAVE_PRE_GAME_PLAYLIST_ERROR', () => {
    expect(
      preGameView(
        {
          ...initialState,
          saving: true
        },
        {
          type: SAVE_PRE_GAME_PLAYLIST_ERROR,
          payload: new Error('oh-the-humanity')
        }
      )
    ).toEqual({
      ...initialState,
      saving: false,
      saveEventPlaylistError: new Error('oh-the-humanity')
    })
  })

  it('should handle PRE_GAME_ACCEPT_SUGGESTED_TRACKS', () => {
    const suggestion = {
      suggestion: { suggestionId: '123' },
      track: { uri: 'abc' } as ITrack
    } as IDecoratedSuggestion
    const suggestionByTrackId = new Map<string, IDecoratedSuggestion>()
    suggestionByTrackId.set('abc', suggestion)

    expect(
      preGameView(initialState, {
        type: PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
        payload: [suggestion]
      })
    ).toEqual({
      ...initialState,
      acceptedSuggestionsByTrackUri: suggestionByTrackId
    })
  })
})
