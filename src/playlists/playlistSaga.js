import { put, call, takeEvery } from 'redux-saga/effects'
import SpotifyWebApi from 'spotify-web-api-js'

import localStorage from '../storage/localStorage'
import { accessTokenKey } from '../auth/authConstants'
import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_ERROR
} from './playlistActions'

function fetchPlaylists() {
  const token = localStorage.get(accessTokenKey)

  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  return spotifyApi.getUserPlaylists()
}

function* fetchPlaylistsFlow() {
  try {
    const playlists = yield call(fetchPlaylists)
    yield put({ type: FETCH_PLAYLISTS_SUCCESS, payload: playlists })
  } catch (error) {
    yield put({ type: FETCH_PLAYLISTS_ERROR, payload: error })
  }
}

export function* watchFetchPlaylists() {
  yield takeEvery(FETCH_PLAYLISTS, fetchPlaylistsFlow)
}
