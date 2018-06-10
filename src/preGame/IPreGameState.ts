import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'

export default interface IPreGameState {
  preGameTabIndex: number
  suggestionFetchError?: Error
  acceptedSuggestionsByTrackUri: Map<string, IDecoratedSuggestion>
  saving: boolean
  saveEventPlaylistError?: Error
}
