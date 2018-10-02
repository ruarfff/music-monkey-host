import Action from '../IAction'
import {
  SAVE_ACCOUNT_FAILURE,
  SAVE_ACCOUNT_REQUEST,
  SAVE_ACCOUNT_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS
} from './accountConstants'
import initialState from './accountInitialState'

export default function home(state = initialState, action : Action) {
  switch (action.type) {
    case UPLOAD_AVATAR_FAILURE:
      return state
    case UPLOAD_AVATAR_SUCCESS:
      return state
    case UPLOAD_AVATAR_REQUEST:
      return state
    case SAVE_ACCOUNT_FAILURE:
      return state
    case SAVE_ACCOUNT_REQUEST:
      return state
    case SAVE_ACCOUNT_SUCCESS:
      return state
    default:
      return state
  }
}
