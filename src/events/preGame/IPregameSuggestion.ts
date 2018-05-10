import ITrack from '../../playlists/ITrack'
import IUser from '../../user/IUser'

export default interface IPregameSuggestion {
  user: IUser
  tracks: ITrack[]
}
