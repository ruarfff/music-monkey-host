import ITrack from '../track/ITrack'

export default interface IPreGameState {
  preGameTabIndex: number
  suggestionFetchError?: Error
  acceptedTracks: ITrack[]
  saving: boolean
}
