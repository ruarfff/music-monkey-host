import Action from '../Action'
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from './userActions'
import { emptyUser } from './userInitialState'

export default function user(state = emptyUser, { type, payload }: Action) {
  switch (type) {
    case FETCH_USER:
      return { ...state, isLoading: true }
    case FETCH_USER_SUCCESS:
      return { ...state, data: payload, isLoading: false }
    case FETCH_USER_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}
