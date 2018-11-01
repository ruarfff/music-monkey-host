import { call, put, takeLatest } from 'redux-saga/effects'
import IAction from '../IAction'
import {
  getNotificationsFailure,
  getNotificationsSuccess,
  NOTIFICATION_FETCH_REQUEST,
  NOTIFICATION_UPDATE_REQUEST,
  updateNotificationFailure,
  updateNotificationSuccess,
} from './notificationActions'
import {
  getNotifications,
  updateNotification
} from './notificationClient'

function* fetchNotificationsByUserId({ payload }: IAction) {
  try {
    const notifications = yield call(getNotifications, payload)
    yield put(getNotificationsSuccess(notifications))
  } catch (e) {
    yield put(getNotificationsFailure(e.message))
  }
}

function* fetchUpdateNotification({ payload }: IAction) {
  try {
    console.log(payload)
    yield call(updateNotification, payload)
    yield put(updateNotificationSuccess())
  } catch (e) {
    yield put(updateNotificationFailure(e.message))
  }
}

export function* watchUpdateNotification() {
  yield takeLatest(NOTIFICATION_UPDATE_REQUEST, fetchUpdateNotification)
}

export function* watchFetchNotificationsByUserId() {
  yield takeLatest(
    NOTIFICATION_FETCH_REQUEST,
    fetchNotificationsByUserId
  )
}
