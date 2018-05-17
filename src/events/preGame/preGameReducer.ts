import IAction from '../../Action'
import IPreGameState from './IPreGameState'
import {
  PRE_GAME_ACCEPT_ALL_SUGGESTED_TRACKS,
  PRE_GAME_ACCEPT_ONE_SUGGESTED_TRACK,
  PRE_GAME_DELETE_ONE_SUGGESTED_TRACK,
  PRE_GAME_SUGGESTIONS_FETCH_ERROR,
  PRE_GAME_SUGGESTIONS_FETCHED,
  PRE_GAME_TAB_INDEX_CHANGED
} from './pregameActions'
import initialState from './preGameInitialState'

export default function preGameView(
  state: IPreGameState = initialState,
  { type, payload }: IAction
) {
  switch (type) {
    case PRE_GAME_TAB_INDEX_CHANGED:
      return {
        ...state,
        preGameTabIndex: payload
      }
    case PRE_GAME_SUGGESTIONS_FETCHED:
      return {
        ...state,
        suggestions: payload
      }
    case PRE_GAME_SUGGESTIONS_FETCH_ERROR:
      return {
        ...state,
        suggestionFetchError: payload
      }
    case PRE_GAME_ACCEPT_ALL_SUGGESTED_TRACKS:
      return {
        ...state,
        acceptedTracks: [...state.acceptedTracks, ...payload.tracks],
        suggestions: state.suggestions
          ? state.suggestions.map(suggestion => {
              if (suggestion.user.userId === payload.user.userId) {
                return {
                  ...suggestion,
                  tracks: []
                }
              }
              return suggestion
            })
          : state.suggestions
      }
    case PRE_GAME_ACCEPT_ONE_SUGGESTED_TRACK:
      return {
        ...state,
        acceptedTracks: [...state.acceptedTracks, payload.track],
        suggestions: state.suggestions
          ? state.suggestions.map(suggestion => {
              if (suggestion.user.userId === payload.suggestion.user.userId) {
                return {
                  ...suggestion,
                  tracks: suggestion.tracks.filter(
                    track => track.uri !== payload.track.uri
                  )
                }
              }
              return suggestion
            })
          : state.suggestions
      }
    case PRE_GAME_DELETE_ONE_SUGGESTED_TRACK:
      return { ...state }
    default:
      return state
  }
}
