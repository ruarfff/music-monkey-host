import axios from 'axios'
import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

import IAction from '../IAction'
import localStorage from '../storage/localStorage'
import { FETCH_USER_SUCCESS } from '../user/userActions'
import {
  LOGGED_OUT,
  LOGGING_IN,
  LOGGING_OUT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REFRESH_AUTH_INITIATED,
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_STORED,
  STORING_REFRESH_TOKEN
} from './authActions'
import { accessTokenKey, refreshTokenKey } from './authConstants'

const serviceUrl = process.env.REACT_APP_MM_API_URL

interface ITokens {
  refreshToken?: string
  accessToken?: string
}

function storeTokens(tokens: ITokens): void {
  if (tokens.refreshToken) {
    localStorage.set(refreshTokenKey, tokens.refreshToken)
  }
  if (tokens.accessToken) {
    localStorage.set(accessTokenKey, tokens.accessToken)
  }
}

function login() {
  return new Promise((resolve, reject) => {
    const refreshToken = localStorage.get(refreshTokenKey)
    if (!refreshToken) {
      reject(new Error('Cannot login as no refresh token has been stored.'))
    } else {
      axios
        .post(serviceUrl + '/refresh', {
          refreshToken
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
    yield put({ type: REFRESH_AUTH_INITIATED })    
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

function* refreshFlow() {
  try {
    const { auth } = yield call(login)
    yield call(storeTokens, {
      refreshToken: auth.refreshToken,
      accessToken: auth.accessToken
    })
    yield call(delay, auth.expiresIn * 1000)
    yield put({ type: REFRESH_AUTH_INITIATED })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error })
  }
}

export function* watchRefresh() {
  yield takeEvery(REFRESH_AUTH_INITIATED, refreshFlow)
}

function* storeRefreshTokenFlow(action: IAction) {
  try {
    yield call(storeTokens, { refreshToken: action.payload })
    yield put({ type: REFRESH_TOKEN_STORED, payload: action.payload })
  } catch (error) {
    yield put({ type: REFRESH_TOKEN_ERROR, payload: error })
  }
}

export function* watchStoreRefreshToken() {
  yield takeEvery(STORING_REFRESH_TOKEN, storeRefreshTokenFlow)
}
