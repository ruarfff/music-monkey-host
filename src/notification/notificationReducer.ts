import Action from '../IAction'
import * as _ from 'lodash'
import {
  NOTIFICATION_FETCH_FAILURE,
  NOTIFICATION_FETCH_REQUEST,
  NOTIFICATION_FETCH_SUCCESS,
  ACTIONED_NOTIFICATION,
  READ_NOTIFICATION
} from './notificationActions'
import initialState, {INotificationState} from './notificationInitialState'

export default function notification(
  state: INotificationState = initialState,
  { type, payload }: Action
) {
  switch (type) {
    case NOTIFICATION_FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }

    case NOTIFICATION_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }

    case NOTIFICATION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: payload
      }
    case READ_NOTIFICATION:
      let modifiedNotifications = state.notifications.map((n, index) => {
        if (index === payload) {
          return {
            ...n,
            status: 'Read'
          }
        }
        return n
      })
      return {
        ...state,
        notifications: modifiedNotifications
      }
    case ACTIONED_NOTIFICATION:
      modifiedNotifications = _.cloneDeep(state.notifications)
      modifiedNotifications.splice(payload, 1)
      return {
        ...state,
        notifications: modifiedNotifications
      }
    default:
      return state
  }
}
