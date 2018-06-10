import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import {
  PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
  PRE_GAME_TAB_INDEX_CHANGED
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

  it('should handle PRE_GAME_ACCEPT_SUGGESTED_TRACKS', () => {
    expect(
      preGameView(initialState, {
        type: PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
        payload: {
          suggestion: { suggestionId: '123' },
          track: { uri: 'abc' } as ITrack
        } as IDecoratedSuggestion
      })
    ).toEqual({
      ...initialState,
      acceptedSuggestions: [
        {
          suggestion: { suggestionId: '123' },
          track: { uri: 'abc' } as ITrack
        } as IDecoratedSuggestion
      ]
    })
  })
})
