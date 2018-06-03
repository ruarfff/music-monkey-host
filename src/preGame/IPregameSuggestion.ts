import ITrack from '../track/ITrack'
import IUser from '../user/IUser'
import ISuggestion from './ISuggestion'

export default interface IPregameSuggestion {
  user: IUser
  suggestion: ISuggestion
  tracks: ITrack[]
}
