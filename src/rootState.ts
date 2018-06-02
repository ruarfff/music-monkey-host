import IAuthState from './auth/IAuthState'
import IEventState from './events/IEventState'
import IPreGameState from './events/preGame/IPreGameState'
import IEventViewState from './events/view/IEventViewState'
import { IHomeState } from './home/HomeModel'
import IPlaylistState from './playlists/IPlaylistState'
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
