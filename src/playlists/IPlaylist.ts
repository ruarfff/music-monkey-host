import IExternalUrls from './IExternalUrls'
import IPlaylistImage from './IPlaylistImage'
import IPlayistOwner from './IPlaylistOwner'
import IPlaylistTracks from './IPlaylistTracks'

export default interface IPlaylist {
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
