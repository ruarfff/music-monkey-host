import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import IEventViewState from './IEventViewState'

export default {
  event: undefined,
  loading: false,
  fetchError: undefined,
  deleteSelected: false,
  copiedToClipboard: false,
  acceptedSuggestionsByTrackUri: new Map<string, IDecoratedSuggestion>()
} as IEventViewState
