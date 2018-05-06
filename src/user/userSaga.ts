import { call, put, takeEvery } from 'redux-saga/effects'
import { accessTokenKey } from '../auth/authConstants'
import localStorage from '../storage/localStorage'
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from './userActions'

const SpotifyWebApi = require('spotify-web-api-js')

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
