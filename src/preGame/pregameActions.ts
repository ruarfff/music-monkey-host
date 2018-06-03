import IAction from '../IAction'
import IPlaylist from '../playlist/IPlaylist'
import ITrack from '../tracks/ITrack'
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

export const PRE_GAME_RESET_UNSAVED_PLAYLIST = 'PRE_GAME_RESET_UNSAVED_PLAYLIST'
export const SAVE_PRE_GAME_PLAYLIST = 'SAVE_PRE_GAME_PLAYLIST'
export const SAVE_PRE_GAME_PLAYLIST_SUCCESS = 'SAVE_PRE_GAME_PLAYLIST_SUCCESS'
export const SAVE_PRE_GAME_PLAYLIST_ERROR = 'SAVE_PRE_GAME_PLAYLIST_ERROR'

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

export const resetUnsavedPlaylist = (): IAction => ({
  type: PRE_GAME_RESET_UNSAVED_PLAYLIST
})

export const savePreGamePlaylist = (
  playlist: IPlaylist,
  playlistTracks: ITrack[]
): IAction => ({
  type: SAVE_PRE_GAME_PLAYLIST,
  payload: {
    event,
    playlist,
    playlistTracks
  }
})
