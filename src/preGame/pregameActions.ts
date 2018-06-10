import IEvent from '../event/IEvent'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'

export const PRE_GAME_TAB_INDEX_CHANGED = 'PRE_GAME_TAB_INDEX_CHANGED'

export const PRE_GAME_ACCEPT_SUGGESTED_TRACKS =
  'PRE_GAME_ACCEPT_SUGGESTED_TRACKS'

export const PRE_GAME_RESET_UNSAVED_PLAYLIST = 'PRE_GAME_RESET_UNSAVED_PLAYLIST'
export const SAVE_PRE_GAME_PLAYLIST = 'SAVE_PRE_GAME_PLAYLIST'
export const SAVE_PRE_GAME_PLAYLIST_SUCCESS = 'SAVE_PRE_GAME_PLAYLIST_SUCCESS'
export const SAVE_PRE_GAME_PLAYLIST_ERROR = 'SAVE_PRE_GAME_PLAYLIST_ERROR'

export const onPreGameTabIndexChange = (index: number): IAction => ({
  type: PRE_GAME_TAB_INDEX_CHANGED,
  payload: index
})

export const acceptSuggestedTracks = (
  suggestions: IDecoratedSuggestion[]
): IAction => ({
  type: PRE_GAME_ACCEPT_SUGGESTED_TRACKS,
  payload: suggestions
})

export const resetUnsavedPlaylist = (): IAction => ({
  type: PRE_GAME_RESET_UNSAVED_PLAYLIST
})

export const savePreGamePlaylist = (
  event: IEvent,
  suggestions: Map<string, IDecoratedSuggestion>
): IAction => ({
  type: SAVE_PRE_GAME_PLAYLIST,
  payload: { event, suggestions }
})
