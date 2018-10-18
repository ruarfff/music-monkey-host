import Action from '../IAction'
import {
  NOTIFICATION_FETCH_FAILURE,
  NOTIFICATION_FETCH_REQUEST,
  NOTIFICATION_FETCH_SUCCESS
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
    default:
      return state
  }
}
