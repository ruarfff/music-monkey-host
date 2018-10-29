import IPlaylist from './IPlaylist'
import IPlaylistState from './IPlaylistState'

export default {
  data: [] as IPlaylist[],
  error: {} as Error,
  isLoading: false,
  searchResult: [],
  selectedPlaylist: {} as IPlaylist
} as IPlaylistState
