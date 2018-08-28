import IAction from '../IAction'
export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGGED_OUT = 'LOGGED_OUT'
export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR'
export const STORING_REFRESH_TOKEN = 'STORING_REFRESH_TOKEN'
export const REFRESH_TOKEN_STORED = 'REFRESH_TOKEN_STORED'
export const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR'
export const REFRESH_AUTH_INITIATED = 'REFRESH_AUTH_INITIATED'

export const login = (): IAction => ({
  type: LOGGING_IN
})

export const loginSuccess = (): IAction => ({
  type: LOGIN_SUCCESS
})

export const loginFailure = (err: Error): IAction => ({
  payload: err,
  type: LOGIN_FAILURE
})

export const logout = (): IAction => ({
  type: LOGGING_OUT
})

export const clearAuthError = (): IAction => ({
  type: CLEAR_AUTH_ERROR
})

export const storeRefreshToken = (token: string): IAction => ({
  type: STORING_REFRESH_TOKEN,
  payload: token
})
