import Action from '../IAction'
import {
  CLEAR_AUTH_ERROR,
  LOGGED_OUT,
  LOGGING_IN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from './authActions'
import initialState from './authInitialState'
import IAuthState from './IAuthState'

export default function auth(
  state = initialState,
  { type, payload }: Action
): IAuthState {
  switch (type) {
    case LOGGING_IN:
      return { ...initialState, isAuthenticating: true }
    case LOGIN_SUCCESS:
      return { ...initialState, isAuthenticating: false, isAuthenticated: true }
    case LOGIN_FAILURE:
      return { ...initialState, isAuthenticating: false, authError: payload }
    case LOGGED_OUT:
      return { ...initialState, isAuthenticated: false }
    case CLEAR_AUTH_ERROR:
      return { ...state, authError: undefined }
    default:
      return state
  }
}
