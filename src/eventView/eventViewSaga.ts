import { call, put, takeEvery } from 'redux-saga/effects'
import { deleteEvent, getEventById } from '../event/eventClient'
import { EVENT_PLAYLIST_FETCHED } from '../eventPlaylist/eventPlaylistActions'
import IAction from '../IAction'
import {
  EVENT_DELETE_FAILED,
  EVENT_DELETE_INITIATED,
  EVENT_DELETE_SUCCESSFUL,
  EVENT_FETCH_BY_ID_ERROR,
  EVENT_FETCH_BY_ID_INITIATED,
  EVENT_FETCHED_BY_ID,
  REFRESH_EVENT_PLAYLIST
} from './eventViewActions'

function* fetchEventByIdFlow(action: IAction) {
  const eventId: string = action.payload
  try {
    const event = yield call(getEventById, eventId)
    const playlist = event.playlist
    delete event.playlist
    yield put({ type: EVENT_FETCHED_BY_ID, payload: event })
    yield put({ type: EVENT_PLAYLIST_FETCHED, payload: playlist })
  } catch (err) {
    yield put({ type: EVENT_FETCH_BY_ID_ERROR, payload: err })
  }
}

export function* watchFetchEventById() {
  yield takeEvery(EVENT_FETCH_BY_ID_INITIATED, fetchEventByIdFlow)
}

function* deleteEventFlow(action: IAction) {
  try {
    yield call(deleteEvent, action.payload)
    yield put({ type: EVENT_DELETE_SUCCESSFUL })
  } catch (err) {
    yield put({ type: EVENT_DELETE_FAILED, payload: err })
  }
}

export function* watchDeleteEvent() {
  yield takeEvery(EVENT_DELETE_INITIATED, deleteEventFlow)
}

export function* watchRefreshEventPlaylist() {
  yield takeEvery(REFRESH_EVENT_PLAYLIST, fetchEventByIdFlow)
}
