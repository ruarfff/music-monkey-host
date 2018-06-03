import ITrack from '../track/ITrack';
import IPregameSuggestion from './IPregameSuggestion'

export default interface IPreGameState {
  preGameTabIndex: number
  suggestions?: IPregameSuggestion[]
  suggestionFetchError?: Error
  acceptedTracks: ITrack[]
  saving: boolean
}
