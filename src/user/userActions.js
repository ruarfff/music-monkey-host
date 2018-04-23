export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export const login = () => ({
  type: USER_LOGIN
})

export const loginSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  payload: data
})

export const logout = () => ({
    type: USER_LOGGED_OUT
})
