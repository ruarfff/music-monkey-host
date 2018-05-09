import IPlaylist from './IPlaylist'

export default interface IPlaylistState {
  data?: IPlaylist
  error?: Error
  isLoading: boolean
}
