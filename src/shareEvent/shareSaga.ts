import { call, put, takeEvery } from 'redux-saga/effects'

import IAction from '../IAction'
import {
  SHARE_EMAIL_REQUEST,
  shareByEmailsFailure,
  shareByEmailsSuccess,
} from './shareActions'
import { sendEmails } from './shareClient'

function* fetchShareEmail({ payload }: IAction) {
  try {
    yield call(sendEmails, payload)
    yield put(shareByEmailsSuccess())
  } catch (e) {
    yield put(shareByEmailsFailure())
  }
}

export function* watchfetchShareEmail() {
  yield takeEvery(
    SHARE_EMAIL_REQUEST,
    fetchShareEmail
  )
}