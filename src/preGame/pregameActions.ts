import IAction from '../IAction'
import IPlaylist from '../playlist/IPlaylist'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'

export const PRE_GAME_TAB_INDEX_CHANGED = 'PRE_GAME_TAB_INDEX_CHANGED'

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

export const acceptAllSuggestedTracks = (
  suggestion: IDecoratedSuggestion
): IAction => ({
  type: PRE_GAME_ACCEPT_ALL_SUGGESTED_TRACKS,
  payload: suggestion
})

export const acceptOneSuggestedTrack = (
  suggestion: IDecoratedSuggestion,
  track: ITrack
): IAction => ({
  type: PRE_GAME_ACCEPT_ONE_SUGGESTED_TRACK,
  payload: { suggestion, track }
})

export const deleteOneSuggestedTrack = (
  suggestion: IDecoratedSuggestion,
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
