import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction';
import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLISTS_SUCCESS,
  REMOVE_TRACK_REQUEST,
  removeTrackError,
  trackRemoved
} from './playlistActions'
import {
  fetchUsersPlaylists,
  removeTrackFromPlaylist,
} from './playlistClient'

function* fetchPlaylistsFlow(action: IAction) {
  try {
    const playlists = yield call(fetchUsersPlaylists, action.payload)
    yield put({ type: FETCH_PLAYLISTS_SUCCESS, payload: playlists })
  } catch (error) {
    yield put({ type: FETCH_PLAYLISTS_ERROR, payload: error })
  }
}

function* fetchRemoveTrackFromPlaylist(action: IAction) {
  const { playlistId, trackUri } = action.payload

  try {
    yield call(removeTrackFromPlaylist, playlistId, trackUri)
    yield put(trackRemoved())
  } catch (e) {
    yield put(removeTrackError(e.message))
  }
}

export function* watchFetchRemoveTrackFromPlaylist() {
  yield takeEvery(REMOVE_TRACK_REQUEST, fetchRemoveTrackFromPlaylist)
}

export function* watchFetchPlaylists() {
  yield takeEvery(FETCH_PLAYLISTS, fetchPlaylistsFlow)
}
