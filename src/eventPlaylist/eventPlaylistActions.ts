import IEvent from '../event/IEvent'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'

export const SAVE_EVENT_PLAYLIST = 'SAVE_EVENT_PLAYLIST'
export const SAVE_EVENT_PLAYLIST_SUCCESS = 'SAVE_EVENT_PLAYLIST_SUCCESS'
export const SAVE_EVENT_PLAYLIST_ERROR = 'SAVE_EVENT_PLAYLIST_ERROR'

export const saveEventPlaylist = (
  event: IEvent,
  suggestions: Map<string, IDecoratedSuggestion>
): IAction => ({
  type: SAVE_EVENT_PLAYLIST,
  payload: { event, suggestions }
})
