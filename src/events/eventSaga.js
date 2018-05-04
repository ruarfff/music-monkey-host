import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import moment from 'moment'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import SpotifyWebApi from 'spotify-web-api-js'
import localStorage from '../storage/localStorage'
import { accessTokenKey } from '../auth/authConstants'
import {
  EVENT_LOCATION_SELECTED,
  EVENT_LOCATION_POPULATED,
  EVENT_LOCATION_ERROR,
  EVENT_CREATE_PLAYLIST_INITIATED,
  EVENT_PLAYLIST_CREATED,
  EVENT_PLAYLIST_CREATION_ERROR,
  EVENT_CONTENT_UPDATED,
  EVENT_SAVE_INITIATED,
  EVENT_SAVED,
  EVENT_SAVE_ERROR,
  EVENTS_FETCH_INITIATED,
  EVENTS_FETCHED,
  EVENTS_FETCH_ERROR
} from './eventActions'

const serviceUrl = process.env.REACT_APP_MM_API_URL

function createPlaylist(playlistDetails) {
  const token = localStorage.get(accessTokenKey)
  const spotifyApi = new SpotifyWebApi()
  const { userId, name, isPublic, description } = playlistDetails

  spotifyApi.setAccessToken(token)
  return spotifyApi.createPlaylist(userId, {
    name,
    description,
    public: isPublic
  })
}

function* createPlaylistFlow({ payload }) {
  try {
    const playlist = yield call(createPlaylist, payload)
    yield put({
      type: EVENT_PLAYLIST_CREATED,
      payload: { playlist }
    })
  } catch (error) {
    yield put({ type: EVENT_PLAYLIST_CREATION_ERROR, payload: error })
  }
}

function* eventPlaylistCreatedFlow({ payload }) {
  yield put({
    type: EVENT_CONTENT_UPDATED,
    payload: { playlist: payload.playlist.external_urls.spotify }
  })
}

function fetchLatLng(address) {
  return geocodeByAddress(address).then(results => getLatLng(results[0]))
}

function* fetchLatLngFlow({ payload }) {
  try {
    const latLng = yield call(fetchLatLng, payload)
    yield put({
      type: EVENT_LOCATION_POPULATED,
      payload: { address: payload, latLng: latLng }
    })
  } catch (error) {
    yield put({ type: EVENT_LOCATION_ERROR, payload: error })
  }
}

function saveEvent(event) {
  return axios
    .post(serviceUrl + '/events', {
      ...event,
      startDateTime: event.startDateTime.toISOString(),
      endDateTime: event.endDateTime.toISOString(),
      location: {
        ...event.location,
        address: event.location.address || 'Nowhere'
      }
    })
    .then(response => {
      const savedEvent = {
        ...response.data,
        startDateTime: moment(response.data.startDateTime),
        endDateTime: moment(response.data.endDateTime)
      }

      return savedEvent
    })
}

function* saveEventFlow({ payload }) {
  try {
    const event = yield call(saveEvent, payload)
    yield put({
      type: EVENT_SAVED,
      payload: event
    })
  } catch (err) {
    yield put({ type: EVENT_SAVE_ERROR, payload: err })
  }
}

function fetchEvents(userId) {
  return axios.get(serviceUrl + '/events?userId=' + userId).then(response =>
    response.data.map(event => ({
      ...event,
      startDateTime: moment(response.data.startDateTime),
      endDateTime: moment(response.data.endDateTime)
    }))
  )
}

function* fetchEventsFlow({ payload }) {
  try {
    const events = yield call(fetchEvents, payload)
    yield put({ type: EVENTS_FETCHED, payload: events })
  } catch (err) {
    yield put({ type: EVENTS_FETCH_ERROR, payload: err })
  }
}

export function* watchUploadEventImage() {
  // TODO: Right now this is done in the component. Should move to saga.
}

export function* watchCreateEventPlaylist() {
  yield takeEvery(EVENT_CREATE_PLAYLIST_INITIATED, createPlaylistFlow)
}

export function* watchEventPlaylistCreated() {
  yield takeEvery(EVENT_PLAYLIST_CREATED, eventPlaylistCreatedFlow)
}

export function* watchUpdateLocationAutoComplete() {
  yield takeEvery(EVENT_LOCATION_SELECTED, fetchLatLngFlow)
}

export function* watchCreateEvent() {
  yield takeEvery(EVENT_SAVE_INITIATED, saveEventFlow)
}

export function* watchFetchEvents() {
  yield takeEvery(EVENTS_FETCH_INITIATED, fetchEventsFlow)
}
