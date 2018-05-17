import IAction from '../../Action'
import ITrack from '../../playlists/ITrack'
import IPregameSuggestion from './IPregameSuggestion'

export const PRE_GAME_TAB_INDEX_CHANGED = 'PRE_GAME_TAB_INDEX_CHANGED'
export const PRE_GAME_SUGGESTIONS_FETCH_INITIATED =
  'PRE_GAME_SUGGESTIONS_FETCH_INITIATED'
export const PRE_GAME_SUGGESTIONS_FETCHED = 'PRE_GAME_SUGGESTIONS_FETCHED'
export const PRE_GAME_SUGGESTIONS_FETCH_ERROR =
  'PRE_GAME_SUGGESTIONS_FETCH_ERROR'

export const PRE_GAME_ACCEPT_ALL_SUGGESTED_TRACKS =
  'PRE_GAME_ACCEPT_ALL_SUGGESTED_TRACKS'
export const PRE_GAME_ACCEPT_ONE_SUGGESTED_TRACK =
  'PRE_GAME_ACCEPT_ONE_SUGGESTED_TRACK'
export const PRE_GAME_DELETE_ONE_SUGGESTED_TRACK =
  'PRE_GAME_DELETE_ONE_SUGGESTED_TRACK'

export const onPreGameTabIndexChange = (index: number): IAction => ({
  type: PRE_GAME_TAB_INDEX_CHANGED,
  payload: index
})

export const fetchPreGameSuggestion = (eventId: string): IAction => ({
  type: PRE_GAME_SUGGESTIONS_FETCH_INITIATED,
  payload: eventId
})

export const acceptAllSuggestedTracks = (
  suggestion: IPregameSuggestion
): IAction => ({
  type: PRE_GAME_ACCEPT_ALL_SUGGESTED_TRACKS,
  payload: suggestion
})

export const acceptOneSuggestedTrack = (
  suggestion: IPregameSuggestion,
  track: ITrack
): IAction => ({
  type: PRE_GAME_ACCEPT_ONE_SUGGESTED_TRACK,
  payload: { suggestion, track }
})

export const deleteOneSuggestedTrack = (
  suggestion: IPregameSuggestion,
  track: ITrack
): IAction => ({
  type: PRE_GAME_DELETE_ONE_SUGGESTED_TRACK,
  payload: { suggestion, track }
})
