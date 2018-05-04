export interface IAuth {
  isAuthenticating: boolean
  isAuthenticated: boolean
  authError: Error
}

export interface IRootState {
  auth: IAuth
  user: {}
  playlists: {}
  home: {}
  events: {}
}
