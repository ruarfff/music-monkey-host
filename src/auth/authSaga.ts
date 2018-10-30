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
import { loginWithCookie, logout, refreshToken } from './authClient'
import { accessTokenKey, refreshTokenKey } from './authConstants'

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

export function* loginFlow() {
  try {
    const user = yield call(loginWithCookie)
    yield put({ type: LOGIN_SUCCESS })
    yield put({ type: FETCH_USER_SUCCESS, payload: user })
    storeTokens({
      refreshToken: user.spotifyAuth.refreshToken,
      accessToken: user.spotifyAuth.accessToken,
    })
    // yield put({ type: REFRESH_AUTH_INITIATED })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error })
  }
}

export function* watchLogin() {
  yield takeEvery(LOGGING_IN, loginFlow)
}
export function* logoutFlow() {
  try {
    localStorage.set(refreshTokenKey, null)
    localStorage.set(accessTokenKey, null)
    yield call(logout)
    yield put({ type: LOGGED_OUT })
  } catch (err) {
    console.error(err)
  }
}

export function* watchLogout() {
  yield takeEvery(LOGGING_OUT, logoutFlow)
}

function* refreshFlow() {
  try {
    const auth = yield call(refreshToken)
    if (auth && auth.expiresIn > 0) {
      yield call(storeTokens, auth)
      yield call(delay, auth.expiresIn * 1000)
      yield put({ type: REFRESH_AUTH_INITIATED })
    }
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
