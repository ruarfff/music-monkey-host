import { put, call, takeEvery } from 'redux-saga/effects'
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
  yield takeEvery(FETCH_USER, fetchUserFlow)
}
