import IAcceptedSuggestionTrack from './IAcceptedSuggestionTrack';

export default interface IPreGameState {
  preGameTabIndex: number
  suggestionFetchError?: Error
  acceptedTracks: IAcceptedSuggestionTrack[]
  saving: boolean
}
