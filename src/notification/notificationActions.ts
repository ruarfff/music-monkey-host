import IAction from '../IAction'
import { INotification } from './notificationInitialState'

export const NOTIFICATION_FETCH_REQUEST = 'NOTIFICATION_FETCH_REQUEST'
export const NOTIFICATION_FETCH_SUCCESS = 'NOTIFICATION_FETCH_SUCCESS'
export const NOTIFICATION_FETCH_FAILURE = 'NOTIFICATION_FETCH_FAILURE'

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