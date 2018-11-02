import IAlbum from '../playlist/IAlbum'

export default interface ITrack {
  disc_number: number
  duration_ms: number
  explicit: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
  album: IAlbum
  href: string
  id: string
}
