import { IAuthState } from './auth/AuthModel'

export interface IRootState {
  auth: IAuthState
  user: {}
  playlists: {}
  home: {}
  events: {}
}
