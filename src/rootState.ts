import { IAuthState } from './auth/AuthModel'
import IEventState from './events/IEventState'
import IEventViewState from './events/view/IEventViewState';
import { IHomeState } from './home/HomeModel'
import { IPlaylistState } from './playlists/PlaylistModel'
import { IUserState } from './user/UserModel'

export default interface IRootState {
  auth: IAuthState
  user: IUserState
  playlists: IPlaylistState
  home: IHomeState
  events: IEventState,
  eventView: IEventViewState
}
