import IPlaylist from './IPlaylist'
import IPlaylistState from './IPlaylistState'

export default {
  data: [] as IPlaylist[],
  error: {} as Error,
  isLoading: false,
  selectedPlaylist: {} as IPlaylist
} as IPlaylistState
