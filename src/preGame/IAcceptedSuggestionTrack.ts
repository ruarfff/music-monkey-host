import ISuggestion from '../suggestion/ISuggestion'
import ITrack from '../track/ITrack'

export default interface IAcceptedSuggestionTrack {
  track: ITrack
  suggestion: ISuggestion
}
