import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import ISuggestion from './ISuggestion'
import ISuggestionState from './ISuggestionState'
import {
  ACCEPT_ALL_SUGGESTIONS,
  ACCEPT_MULTIPLE_SUGGESTIONS,
  ACCEPT_SUGGESTION,
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS,
  REJECT_SUGGESTION
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

  it('should handle ACCEPT_SUGGESTION', () => {
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
          type: ACCEPT_SUGGESTION,
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

  it('should handle ACCEPT_MULTIPLE_SUGGESTIONS', () => {
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
          type: ACCEPT_MULTIPLE_SUGGESTIONS,
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

  it('should handle ACCEPT_ALL_SUGGESTIONS', () => {
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
          type: ACCEPT_ALL_SUGGESTIONS
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

  it('should handle REJECT_SUGGESTION', () => {
    const suggestionToReject = {
      suggestion: {
        suggestionId: '123',
        accepted: false,
        rejected: false
      } as ISuggestion
    } as IDecoratedSuggestion
    const pendingSuggestion = {
      suggestion: { suggestionId: 'na' } as ISuggestion
    } as IDecoratedSuggestion

    expect(
      suggestion(
        {
          ...initialState,
          pendingSuggestions: [pendingSuggestion, suggestionToReject]
        },
        { type: REJECT_SUGGESTION, payload: suggestionToReject.suggestion }
      )
    ).toEqual({
      ...initialState,
      pendingSuggestions: [pendingSuggestion],
      rejectedSuggestions: [{...suggestionToReject, suggestion: {...suggestionToReject.suggestion, rejected: true}}]
    })
  })
})
