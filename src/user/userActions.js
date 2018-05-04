export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

export const fetchUser = () => ({
  type: FETCH_USER
})

export const fetchUserSuccess = data => ({
  payload: data,
  type: FETCH_USER_SUCCESS
})

export const fetchUserError = error => ({
  payload: error,
  type: FETCH_USER_ERROR
})
