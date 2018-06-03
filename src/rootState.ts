import IAuthState from './auth/IAuthState'
import IEventState from './event/IEventState'
import IEventViewState from './eventView/IEventViewState'
import { IHomeState } from './home/HomeModel'
import IPlaylistState from './playlists/IPlaylistState'
import IPreGameState from './preGame/IPreGameState'
import ITrackState from './tracks/ITrackState'
import IUserState from './user/IUserState'

export default interface IRootState {
  auth: IAuthState
  user: IUserState
  playlists: IPlaylistState
  home: IHomeState
  events: IEventState
  eventView: IEventViewState
  preGame: IPreGameState
  track: ITrackState
}
