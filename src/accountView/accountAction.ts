import IAction from '../IAction'
import {
  SAVE_ACCOUNT_REQUEST,
  UPLOAD_AVATAR_REQUEST,
} from './accountConstants'

export const uploadAvatar = (payload: any): IAction => {
  return {
    type: UPLOAD_AVATAR_REQUEST,
    payload,
  }
}

export const saveAccountChanges = (payload: any): IAction => {
  return {
    type: SAVE_ACCOUNT_REQUEST,
    payload
  }
}