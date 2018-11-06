import Action from '../IAction'
import {
  FETCH_USER,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from './userActions'
import { emptyUser } from './userInitialState'

export default function user(state = emptyUser, { type, payload }: Action) {
  switch (type) {
    case FETCH_USER:
      return { ...state, isLoading: true }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: new Error()
      }
    case FETCH_USER_ERROR:
      return { ...state, error: payload }
    case UPDATE_USER_REQUEST:
      return { ...state, isUpdating: true}
    case UPDATE_USER_SUCCESS:
      return { ...state, data: payload.data}
    case UPDATE_USER_FAILURE:
      return { ...state, error: payload}
    default:
      return state
  }
}
