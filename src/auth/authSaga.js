import { take, put, call, fork, cancel } from 'redux-saga/effects'
import axios from 'axios'

import { refreshTokenKey, accessTokenKey } from './authConstants'
import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGGING_OUT,
  LOGGED_OUT
} from './authActions'
import localStorage from '../storage/localStorage'

const serviceUrl = process.env.REACT_APP_MM_API_URL

function logout() {
  localStorage.set(refreshTokenKey, null)
  localStorage.set(accessTokenKey, null)
}

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
          localStorage.set(accessTokenKey, response.data.access_token)
          resolve()
        })
        .catch(reject)
    }
  })
}

function* authorize() {
  try {
    yield call(login)
    yield put({ type: LOGIN_SUCCESS })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error })
  }
}

export function* loginFlow() {
  while (true) {
    yield take(LOGGING_IN)
    const task = yield fork(authorize)
    const action = yield take([LOGGING_OUT, LOGIN_FAILURE])
    if (action.type === LOGIN_FAILURE || action.type === LOGGING_OUT)
      yield cancel(task)
  }
}

export function* logoutFlow() {
  while (true) {
    yield take(LOGGING_OUT)
    yield call(logout)
    yield put({ type: LOGGED_OUT })
  }
}
