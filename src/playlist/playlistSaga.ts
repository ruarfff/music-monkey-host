import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction';
import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLISTS_SUCCESS,
  REMOVE_TRACK_REQUEST,
  removeTrackError,
  SEARCH_TRACKS_REQUEST,
  searchTrackFailure,
  searchTrackSuccess,
  trackRemoved
} from './playlistActions'
import {
  fetchUsersPlaylists,
  removeTrackFromPlaylist,
  searchForTracks,
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

function* fetchSearchedTracks(action: IAction) {

  try {
    const res = yield call(searchForTracks, action.payload)
    yield put(searchTrackSuccess(res))
  } catch (e) {
    yield put(searchTrackFailure(e.message))
  }
}

export function* watchFetchSearchTracks() {
  yield takeEvery(SEARCH_TRACKS_REQUEST, fetchSearchedTracks)
}

export function* watchFetchRemoveTrackFromPlaylist() {
  yield takeEvery(REMOVE_TRACK_REQUEST, fetchRemoveTrackFromPlaylist)
}

export function* watchFetchPlaylists() {
  yield takeEvery(FETCH_PLAYLISTS, fetchPlaylistsFlow)
}
