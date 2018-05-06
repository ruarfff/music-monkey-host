// Minimal deifinition required for creating a new playlist
export interface IPlaylistDetails {
  userId: string
  name: string
  isPublic: boolean
  description?: string
}

export interface IExternalUrls {
  spotify: string
}

export interface IPlaylistImage {
  url: string
}

export interface IPlayistOwner {
  display_name: string
  external_urls: IExternalUrls
  href: string
  id: string
  type: string
}

export interface IPlaylistTracks {
  href: string
  total: number
}

export interface IPlaylist {
  collaborative: boolean
  external_urls: IExternalUrls
  href: string
  id: string
  images: IPlaylistImage[]
  name: string
  owner: IPlayistOwner
  primary_color?: string
  public: boolean
  snapshot_id: string
  tracks: IPlaylistTracks
  type: string
  uri: string
}

export interface IPlaylistState {
  data?: IPlaylist
  error?: Error
  isLoading: boolean
}
