import { call, put, takeLatest } from 'redux-saga/effects'
import IAction from '../IAction'
import {
  getNotificationsFailure,
  getNotificationsSuccess,
  NOTIFICATION_FETCH_REQUEST,
} from './notificationActions'
import { getNotifications } from './notificationClient'

function* fetchNotificationsByUserId({ payload }: IAction) {
  try {
    const notifications = yield call(getNotifications, payload)
    yield put(getNotificationsSuccess(notifications))
  } catch (e) {
    yield put(getNotificationsFailure(e.message))
  }
}

export function* watchFetchNotificationsByUserId() {
  yield takeLatest(
    NOTIFICATION_FETCH_REQUEST,
    fetchNotificationsByUserId
  )
}
