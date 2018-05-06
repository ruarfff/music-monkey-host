import { IAuthState } from './auth/AuthModel'
import {IHomeState} from './home/HomeModel'
import { IPlaylistState } from './playlists/PlaylistModel';
import {IUserState} from './user/UserModel'

export interface IRootState {
  auth: IAuthState
  user: IUserState
  playlists: IPlaylistState
  home: IHomeState
  events: {}
}
