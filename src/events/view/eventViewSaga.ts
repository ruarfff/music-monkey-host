import axios from 'axios'
import * as moment from 'moment'
import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../../IAction'
import EventDecorator from '../EventDecorator'
import {
  EVENT_DELETE_FAILED,
  EVENT_DELETE_INITIATED,
  EVENT_DELETE_SUCCESSFUL,
  EVENT_FETCH_BY_ID_ERROR,
  EVENT_FETCH_BY_ID_INITIATED,
  EVENT_FETCHED_BY_ID,
  REFRESH_EVENT_PLAYLIST
} from './eventViewActions'

const serviceUrl = process.env.REACT_APP_MM_API_URL
const eventDecorator = new EventDecorator()
interface IDeleteParams {
  eventId: string
  userId: string
}

function fetchEvent(eventId: string) {
  return axios.get(serviceUrl + '/events/' + eventId).then(response => ({
    ...response.data,
    endDateTime: moment(response.data.endDateTime),
    startDateTime: moment(response.data.startDateTime)
  }))
}

function* fetchEventByIdFlow(action: IAction) {
  const eventId: string = action.payload
  try {
    const event = yield call(fetchEvent, eventId)
    const decoratedEvent = yield call(eventDecorator.decorateEvent, event)
    yield put({ type: EVENT_FETCHED_BY_ID, payload: decoratedEvent })
  } catch (err) {
    yield put({ type: EVENT_FETCH_BY_ID_ERROR, payload: err })
  }
}

export function* watchFetchEventById() {
  yield takeEvery(EVENT_FETCH_BY_ID_INITIATED, fetchEventByIdFlow)
}

function deleteEvent({ eventId, userId }: IDeleteParams) {
  return axios.delete(serviceUrl + '/events/' + eventId + '?userId=' + userId)
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

// function refreshPlaylist() {}

// function* refreshEventPlaylistFlow(action: IAction) {
//   try {
//     const event = yield call(refreshPlaylist, action.payload)
//     yield put({ type: REFRESH_EVENT_PLAYLIST_SUCCESS, payload: event })
//   } catch (err) {
//     yield put({ type: REFRESH_EVENT_PLAYLIST_FAILED, payload: err })
//   }
// }

export function* watchRefreshEventPlaylist() {
  yield takeEvery(REFRESH_EVENT_PLAYLIST, fetchEventByIdFlow)
}
