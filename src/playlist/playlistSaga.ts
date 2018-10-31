import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction';
import {
  ADD_TRACK_REQUEST,
  addTrackError,
  addTrackSuccess,
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
  addTracksToPlaylist,
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
  const { playlistId, trackUri, trackPosition } = action.payload

  try {
    yield call(removeTrackFromPlaylist, playlistId, trackUri, trackPosition)
    yield put(trackRemoved())
  } catch (error) {
    yield put(removeTrackError())
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

function* fetchAddTrackToPlaylist(action: IAction) {
  try {
    yield call(addTracksToPlaylist, action.payload.playlistId, [action.payload.trackUri])
    yield put(addTrackSuccess())
  } catch (e) {
    yield put(addTrackError())
  }
}

export function* watchFetchAddTrackToPlaylist() {
  yield takeEvery(ADD_TRACK_REQUEST, fetchAddTrackToPlaylist)
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
