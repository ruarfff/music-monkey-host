import ITrack from '../../playlists/ITrack';
import IPregameSuggestion from './IPregameSuggestion'

export default interface IPreGameState {
  preGameTabIndex: number
  suggestions?: IPregameSuggestion[]
  suggestionFetchError?: Error
  acceptedTracks: ITrack[]
}
