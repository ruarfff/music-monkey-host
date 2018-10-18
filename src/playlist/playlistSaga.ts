import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction';
import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLISTS_SUCCESS
} from './playlistActions'
import {fetchUsersPlaylists} from './playlistClient'

function* fetchPlaylistsFlow(action: IAction) {
  try {
    const playlists = yield call(fetchUsersPlaylists, action.payload)
    yield put({ type: FETCH_PLAYLISTS_SUCCESS, payload: playlists })
  } catch (error) {
    yield put({ type: FETCH_PLAYLISTS_ERROR, payload: error })
  }
}

export function* watchFetchPlaylists() {
  yield takeEvery(FETCH_PLAYLISTS, fetchPlaylistsFlow)
}
