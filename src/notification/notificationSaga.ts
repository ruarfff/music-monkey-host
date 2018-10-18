import { put, takeLatest } from 'redux-saga/effects'
import IAction from '../IAction'
import {
  getNotificationsFailure,
  getNotificationsSuccess,
  NOTIFICATION_FETCH_REQUEST,
} from './notificationActions'
// import { getNotifications } from './notificationClient'

function* fetchNotificationsByUserId({ payload }: IAction) {
  try {
    // const notifications = yield call(getNotifications, payload)
    const notifications = [
      {
        userId: 'host-userId',
        type: 'rsvp',
        context: 'event',
        contextId: 'eventId1',
        text: 'Some Person is going to Event X.',
        status: 'Unread'
      },
      {
        userId: 'host-userId',
        type: 'rsvp',
        context: 'event',
        contextId: 'eventId2',
        text: 'Some Person is going to Event X.',
        status: 'Unread'
      },
      {
        userId: 'host-userId',
        type: 'rsvp',
        context: 'event',
        contextId: 'eventId3',
        text: 'Some Person is going to Event X.',
        status: 'Unread'
      }
    ]
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
