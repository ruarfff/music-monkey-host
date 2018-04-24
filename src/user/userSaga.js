import { take, put, call, fork, cancel } from 'redux-saga/effects'
import SpotifyWebApi from 'spotify-web-api-js'

import localStorage from '../storage/localStorage'
import { accessTokenKey } from '../auth/authConstants'
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userActions'

function fetchUser() {
  const token = localStorage.get(accessTokenKey)

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  return spotifyApi.getMe()
}

function* fetchUserFlow() {
  try {
    const user = yield call(fetchUser)
    yield put({ type: FETCH_USER_SUCCESS, payload: user })
  } catch (error) {
    yield put({ type: FETCH_USER_ERROR, payload: error })
  }
}

export function* watchFetchUser() {
  while (true) {
    yield take(FETCH_USER)
    const task = yield fork(fetchUserFlow)
    const action = yield take([FETCH_USER_ERROR])
    if (action.type === FETCH_USER_ERROR) yield cancel(task)
  }
}
