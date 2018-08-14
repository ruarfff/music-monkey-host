import IEvent from '../event/IEvent'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'

export default interface IEventViewState {
  event?: IEvent
  loading: boolean
  fetchError?: Error
  deleteSelected: boolean
  deleteSucceeded: boolean
  deleteFailed: boolean
  copiedToClipboard: boolean
  savingEventPlaylist: boolean
  saveEventPlaylistError?: Error
  acceptedSuggestionsByTrackUri: Map<string, IDecoratedSuggestion>
  pendingSuggestions: IDecoratedSuggestion[]
  rejectedSuggestions: IDecoratedSuggestion[]
}
