import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'
import {
  CLEAR_SAVED_SUGGESTION,
  DELETE_SUGGESTION_FAILED,
  DELETE_SUGGESTION_INITIATED,
  DELETE_SUGGESTION_SUCCESS,
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  SAVE_SUGGESTION_FAILED,
  SAVE_SUGGESTION_INITIATED,
  SAVE_SUGGESTION_SUCCESS,
  SET_ALL_SUGGESTIONS_TO_ACCEPTED,
  SET_SUGGESTION_TO_ACCEPTED,
  SET_SUGGESTIONS_TO_ACCEPTED
} from './suggestionActions'
import initialState from './suggestionInitialState'
import suggestion from './suggestionReducer'

describe('suggestionReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(suggestion(undefined, {} as IAction)).toEqual(initialState)
  })

  it('should handle SAVE_SUGGESTION_INITIATED', () => {
    expect(
      suggestion(initialState, {
        type: SAVE_SUGGESTION_INITIATED
      })
    ).toEqual({
      ...initialState,
      savingSuggestion: true
    })
  })

  it('should handle SAVE_SUGGESTION_SUCCESS', () => {
    expect(
      suggestion(
        { ...initialState, savingSuggestion: true },
        {
          type: SAVE_SUGGESTION_SUCCESS,
          payload: {} as ISuggestion
        }
      )
    ).toEqual({
      ...initialState,
      savingSuggestion: false,
      savedSuggestion: {} as ISuggestion
    })
  })

  it('should handle SAVE_SUGGESTION_FAILED', () => {
    expect(
      suggestion(
        { ...initialState, savingSuggestion: true },
        {
          type: SAVE_SUGGESTION_FAILED,
          payload: new Error('hurtrealbad')
        }
      )
    ).toEqual({
      ...initialState,
      savingSuggestion: false,
      savingSuggestionError: new Error('hurtrealbad')
    })
  })

  it('should handle FETCH_SUGGESTIONS_INITIATED', () => {
    expect(
      suggestion(initialState, {
        type: FETCH_SUGGESTIONS_INITIATED
      })
    ).toEqual({
      ...initialState,
      fetchingSuggestions: true
    })
  })

  it('should handle FETCH_SUGGESTIONS_FAILED', () => {
    expect(
      suggestion(
        { ...initialState, fetchingSuggestions: true },
        { type: FETCH_SUGGESTIONS_FAILED, payload: new Error('terrible') }
      )
    ).toEqual({
      ...initialState,
      fetchingSuggestions: false,
      fetchinSuggestionsError: new Error('terrible')
    })
  })

  it('should handle CLEAR_SAVED_SUGGESTION', () => {
    expect(
      suggestion(
        { ...initialState, savedSuggestion: {} as ISuggestion },
        { type: CLEAR_SAVED_SUGGESTION }
      )
    ).toEqual({ ...initialState, savedSuggestion: undefined })
  })

  it('should handle DELETE_SUGGESTION_INITIATED', () => {
    expect(
      suggestion(initialState, {
        type: DELETE_SUGGESTION_INITIATED,
        payload: {} as ISuggestion
      })
    ).toEqual({ ...initialState, deletingSuggestion: true })
  })

  it('should handle DELETE_SUGGESTION_SUCCESS', () => {
    expect(
      suggestion(
        { ...initialState, deletingSuggestion: true },
        { type: DELETE_SUGGESTION_SUCCESS, payload: {} as ISuggestion }
      )
    ).toEqual({
      ...initialState,
      deletingSuggestion: false,
      deletedSuggestion: {} as ISuggestion
    })
  })

  it('should handle DELETE_SUGGESTION_FAILED', () => {
    expect(
      suggestion(
        { ...initialState, deletingSuggestion: true },
        { type: DELETE_SUGGESTION_FAILED, payload: new Error('balls') }
      )
    ).toEqual({ ...initialState, deletingSuggestionError: new Error('balls') })
  })

  it('should handle SET_SUGGESTION_TO_ACCEPTED', () => {
    expect(
      suggestion(
        {
          ...initialState,
          suggestions: [
            {
              suggestion: { suggestionId: 'na' } as ISuggestion
            } as IDecoratedSuggestion,
            {
              suggestion: {
                suggestionId: '123',
                accepted: false
              } as ISuggestion
            } as IDecoratedSuggestion
          ]
        },
        {
          type: SET_SUGGESTION_TO_ACCEPTED,
          payload: { suggestionId: '123', accepted: false } as ISuggestion
        }
      )
    ).toEqual({
      ...initialState,
      suggestions: [
        {
          suggestion: { suggestionId: 'na' } as ISuggestion
        } as IDecoratedSuggestion,
        {
          suggestion: {
            suggestionId: '123',
            accepted: true
          } as ISuggestion
        } as IDecoratedSuggestion
      ]
    })
  })

  it('shoudl handle SET_SUGGESTIONS_TO_ACCEPTED', () => {
    const suggestions = [
      {
        suggestion: { suggestionId: '1' }
      } as IDecoratedSuggestion,
      {
        suggestion: { suggestionId: '2' }
      } as IDecoratedSuggestion
    ]

    expect(
      suggestion(
        {
          ...initialState,
          suggestions
        },
        {
          type: SET_SUGGESTIONS_TO_ACCEPTED,
          payload: suggestions.map(s => s.suggestion)
        }
      )
    ).toEqual({
      ...initialState,
      suggestions: [
        {
          suggestion: { suggestionId: '1', accepted: true }
        } as IDecoratedSuggestion,
        {
          suggestion: { suggestionId: '2', accepted: true }
        } as IDecoratedSuggestion
      ]
    })
  })

  it('shoudl handle SET_ALL_SUGGESTIONS_TO_ACCEPTED', () => {
    expect(
      suggestion(
        {
          ...initialState,
          suggestions: [
            {
              suggestion: { suggestionId: 'na' } as ISuggestion
            } as IDecoratedSuggestion,
            {
              suggestion: {
                suggestionId: '123',
                accepted: false
              } as ISuggestion
            } as IDecoratedSuggestion
          ]
        },
        {
          type: SET_ALL_SUGGESTIONS_TO_ACCEPTED
        }
      )
    ).toEqual({
      ...initialState,
      suggestions: [
        {
          suggestion: { suggestionId: 'na', accepted: true } as ISuggestion
        } as IDecoratedSuggestion,
        {
          suggestion: {
            suggestionId: '123',
            accepted: true
          } as ISuggestion
        } as IDecoratedSuggestion
      ]
    })
  })
})
