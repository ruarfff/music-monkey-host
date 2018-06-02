import IAction from '../../IAction'
import IPregameSuggestion from './IPregameSuggestion'
import {
  PRE_GAME_SUGGESTIONS_FETCH_ERROR,
  PRE_GAME_SUGGESTIONS_FETCHED,
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

  it('should handle PRE_GAME_SUGGESTIONS_FETCHED', () => {
    expect(
      preGameView(initialState, {
        type: PRE_GAME_SUGGESTIONS_FETCHED,
        payload: [] as IPregameSuggestion[]
      })
    ).toEqual({ ...initialState, suggestions: [] as IPregameSuggestion[] })
  })

  it('should handle PRE_GAME_SUGGESTIONS_FETCH_ERROR', () => {
    expect(
      preGameView(initialState, {
        type: PRE_GAME_SUGGESTIONS_FETCH_ERROR,
        payload: new Error('testing')
      })
    ).toEqual({ ...initialState, suggestionFetchError: new Error('testing') })
  })
})
