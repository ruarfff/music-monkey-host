import IAction from '../IAction'
import { INotification } from './notificationInitialState'

export const NOTIFICATION_FETCH_REQUEST = 'NOTIFICATION_FETCH_REQUEST'
export const NOTIFICATION_FETCH_SUCCESS = 'NOTIFICATION_FETCH_SUCCESS'
export const NOTIFICATION_FETCH_FAILURE = 'NOTIFICATION_FETCH_FAILURE'

export const READ_NOTIFICATION = 'READ_NOTIFICATION'
export const ACTIONED_NOTIFICATION = 'ACTIONED_NOTIFICATION'

export const getNotifications = (userId: string): IAction => {
  return {
    type: NOTIFICATION_FETCH_REQUEST,
    payload: userId,
  }
}

export const getNotificationsSuccess = (notifications: INotification[]): IAction => {
  return {
    type: NOTIFICATION_FETCH_SUCCESS,
    payload: notifications,
  }
}

export const getNotificationsFailure = (error: string): IAction => {
  return {
    type: NOTIFICATION_FETCH_FAILURE,
    payload: error,
  }
}

export const readNotification = (noteIndex: number): IAction => {
  return {
    type: READ_NOTIFICATION,
    payload: noteIndex
  }
}

export const actionedNotification = (noteIndex: number): IAction => {
  return {
    type: ACTIONED_NOTIFICATION,
    payload: noteIndex
  }
}