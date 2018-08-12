import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'
import ISuggestionState from './ISuggestionState'
import {
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS,
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
      fetchingSuggestionsError: new Error('terrible')
    })
  })

  it('should handle FETCH_SUGGESTIONS_SUCCESS', () => {
    const suggestions = [
      { suggestionId: 'pending' } as ISuggestion,
      {
        suggestionId: 'rejected',
        accepted: false,
        rejected: true
      } as ISuggestion,
      {
        suggestionId: 'accepted',
        accepted: true,
        rejected: false
      } as ISuggestion
    ]

    expect(
      suggestion(
        { ...initialState, fetchingSuggestions: true },
        { type: FETCH_SUGGESTIONS_SUCCESS, payload: suggestions }
      )
    ).toEqual({
      ...initialState,
      fetchingSuggestions: false,
      pendingSuggestions: [{ suggestionId: 'pending' } as ISuggestion],
      rejectedSuggestions: [
        {
          suggestionId: 'rejected',
          accepted: false,
          rejected: true
        } as ISuggestion
      ],
      acceptedSuggestions: [
        {
          suggestionId: 'accepted',
          accepted: true,
          rejected: false
        } as ISuggestion
      ]
    })
  })

  it('should handle SET_SUGGESTION_TO_ACCEPTED', () => {
    expect(
      suggestion(
        {
          ...initialState,
          pendingSuggestions: [
            {
              suggestion: { suggestionId: 'na' } as ISuggestion
            } as IDecoratedSuggestion,
            {
              suggestion: {
                suggestionId: '123',
                accepted: false,
                rejected: false
              } as ISuggestion
            } as IDecoratedSuggestion
          ]
        },
        {
          type: SET_SUGGESTION_TO_ACCEPTED,
          payload: {
            suggestionId: '123',
            accepted: false,
            rejected: false
          } as ISuggestion
        }
      )
    ).toEqual({
      ...initialState,
      pendingSuggestions: [
        {
          suggestion: { suggestionId: 'na' } as ISuggestion
        } as IDecoratedSuggestion
      ],
      acceptedSuggestions: [
        {
          suggestion: {
            suggestionId: '123',
            accepted: true,
            rejected: false
          } as ISuggestion
        } as IDecoratedSuggestion
      ]
    } as ISuggestionState)
  })

  it('should handle SET_SUGGESTIONS_TO_ACCEPTED', () => {
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
          pendingSuggestions: suggestions
        },
        {
          type: SET_SUGGESTIONS_TO_ACCEPTED,
          payload: suggestions.map(s => s.suggestion)
        }
      )
    ).toEqual({
      ...initialState,
      pendingSuggestions: [],
      acceptedSuggestions: [
        {
          suggestion: { suggestionId: '1', accepted: true }
        } as IDecoratedSuggestion,
        {
          suggestion: { suggestionId: '2', accepted: true }
        } as IDecoratedSuggestion
      ]
    } as ISuggestionState)
  })

  it('should handle SET_ALL_SUGGESTIONS_TO_ACCEPTED', () => {
    expect(
      suggestion(
        {
          ...initialState,
          pendingSuggestions: [
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
      pendingSuggestions: [],
      acceptedSuggestions: [
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
    } as ISuggestionState)
  })
})
