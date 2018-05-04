export interface Auth {
  isAuthenticating: boolean
  isAuthenticated: boolean
  authError: Error
}

export interface RootState {
  auth: Auth
  user: {}
  playlists: {}
  home: {}
  events: {}
}
