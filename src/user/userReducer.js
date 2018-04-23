import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGGED_OUT } from './userActions'

const initialState = {
  data: null,
  isLoading: false
}

export default function userUpdate(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGIN:
      return { ...initialState, isLoading: true }
    case USER_LOGIN_SUCCESS:
      return { data: payload, isLoading: false }
    case USER_LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
