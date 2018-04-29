import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGGED_OUT
} from './authActions'
import initialState from './authInitialState'

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case LOGGING_IN:
      return { ...initialState, isAuthenticating: true }
    case LOGIN_SUCCESS:
      return { ...initialState, isAuthenticating: false, isAuthenticated: true }
    case LOGIN_FAILURE:
      return { ...initialState, isAuthenticating: false, authError: payload }
    case LOGGED_OUT:
      return { ...initialState, isAuthenticated: false }
    default:
      return state
  }
}