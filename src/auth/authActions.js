export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGGED_OUT = 'LOGGED_OUT'
export const STORE_REFRESH_TOKEN = 'STORE_REFRESH_TOKEN'
export const REFRESH_TOKEN_STORED = 'REFRESH_TOKEN_STORED'

export const login = () => ({
  type: LOGGING_IN
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

export const loginFailure = (err) => ({
    payload: err,
    type: LOGIN_FAILURE
}) 

export const logout = () => ({
    type: LOGGING_OUT
})

export const loggedOut = () => ({
    type: LOGGED_OUT
})
