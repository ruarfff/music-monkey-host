import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userActions'
import initialState from './userInitialState'

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USER:
      return { ...initialState, isLoading: true }
    case FETCH_USER_SUCCESS:
      return { ...initialState, data: payload, isLoading: false }
    case FETCH_USER_ERROR:
      return {...initialState, error: payload }
    default:
      return state
  }
}
