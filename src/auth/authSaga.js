import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { refreshTokenKey, accessTokenKey } from './authConstants'
import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGGING_OUT,
  LOGGED_OUT
} from './authActions'
import { FETCH_USER_SUCCESS } from '../user/userActions'
import localStorage from '../storage/localStorage'

const serviceUrl = process.env.REACT_APP_MM_API_URL

function login() {
  return new Promise((resolve, reject) => {
    const refreshToken = localStorage.get(refreshTokenKey)
    if (!refreshToken) {
      reject(new Error('Cannot login as no refresh token has been stored.'))
    } else {
      axios
        .post(serviceUrl + '/refresh', {
          refreshToken: refreshToken
        })
        .then(response => {
          localStorage.set(accessTokenKey, response.data.auth.accessToken)
          resolve(response.data)
        })
        .catch(reject)
    }
  })
}

export function* loginFlow() {
  try {
    const user = yield call(login)
    yield put({ type: LOGIN_SUCCESS })
    yield put({ type: FETCH_USER_SUCCESS, payload: user })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error })
  }
}

export function* watchLogin() {
  yield takeEvery(LOGGING_IN, loginFlow)
}

function logout() {
  localStorage.set(refreshTokenKey, null)
  localStorage.set(accessTokenKey, null)
}

function* logoutFlow() {
  yield call(logout)
  yield put({ type: LOGGED_OUT })
}

export function* watchLogout() {
  yield takeEvery(LOGGING_OUT, logoutFlow)
}
