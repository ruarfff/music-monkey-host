import Action from '../Action'
export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGGED_OUT = 'LOGGED_OUT'
export const STORE_REFRESH_TOKEN = 'STORE_REFRESH_TOKEN'
export const REFRESH_TOKEN_STORED = 'REFRESH_TOKEN_STORED'

export const login = (): Action => ({
  type: LOGGING_IN
})

export const loginSuccess = (): Action => ({
  type: LOGIN_SUCCESS
})

export const loginFailure = (err: Error): Action => ({
  payload: err,
  type: LOGIN_FAILURE
})

export const logout = (): Action => ({
  type: LOGGING_OUT
})

export const loggedOut = (): Action => ({
  type: LOGGED_OUT
})
