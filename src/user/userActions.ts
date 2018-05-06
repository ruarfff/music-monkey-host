import Action from '../Action'
import { IUser } from './UserModel'
export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

export const fetchUser = (): Action => ({
  type: FETCH_USER
})

export const fetchUserSuccess = (data: IUser): Action => ({
  payload: data,
  type: FETCH_USER_SUCCESS
})

export const fetchUserError = (error: Error): Action => ({
  payload: error,
  type: FETCH_USER_ERROR
})
