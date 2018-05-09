import axios from 'axios'
import * as moment from 'moment'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as SpotifyWebApi from 'spotify-web-api-js'
import IAction from '../Action'
import { accessTokenKey } from '../auth/authConstants'
import IPlaylist from '../playlists/IPlaylist'
import IPlaylistDetails from '../playlists/IPlaylistDetails'
import localStorage from '../storage/localStorage'
import {
  EVENT_CONTENT_UPDATED,
  EVENT_CREATE_PLAYLIST_INITIATED,
  EVENT_LOCATION_ERROR,
  EVENT_LOCATION_POPULATED,
  EVENT_LOCATION_SELECTED,
  EVENT_PLAYLIST_CREATED,
  EVENT_PLAYLIST_CREATION_ERROR,
  EVENT_SAVE_ERROR,
  EVENT_SAVE_INITIATED,
  EVENT_SAVED,
  EVENTS_FETCH_ERROR,
  EVENTS_FETCH_INITIATED,
  EVENTS_FETCHED
} from './eventActions'
import EventDecorator from './EventDecorator'
import IEvent from './IEvent'

const { geocodeByAddress, getLatLng } = require('react-places-autocomplete')

const serviceUrl = process.env.REACT_APP_MM_API_URL
const eventDecorator = new EventDecorator()

function createPlaylist(playlistDetails: IPlaylistDetails) {
  const token = localStorage.get(accessTokenKey)
  const spotifyApi = new SpotifyWebApi()
  const { userId, name, isPublic, description } = playlistDetails

  spotifyApi.setAccessToken(token)
  return spotifyApi.createPlaylist(userId, {
    description,
    name,
    public: isPublic
  })
}

function* createPlaylistFlow(action: IAction) {
  const playlistDetials: IPlaylistDetails = action.payload
  try {
    const playlist = yield call(createPlaylist, playlistDetials)
    yield put({
      payload: playlist,
      type: EVENT_PLAYLIST_CREATED
    })
  } catch (error) {
    yield put({ type: EVENT_PLAYLIST_CREATION_ERROR, payload: error })
  }
}

function* eventPlaylistCreatedFlow(action: IAction) {
  const playlist: IPlaylist = action.payload
  yield put({
    payload: { playlistUrl: playlist.external_urls.spotify },
    type: EVENT_CONTENT_UPDATED
  })
}

function fetchLatLng(address: string) {
  return geocodeByAddress(address).then((results: any) => getLatLng(results[0]))
}

function* fetchLatLngFlow(action: IAction) {
  const address: string = action.payload
  try {
    const latLng = yield call(fetchLatLng, address)
    yield put({
      payload: { address, latLng },
      type: EVENT_LOCATION_POPULATED
    })
  } catch (error) {
    yield put({ type: EVENT_LOCATION_ERROR, payload: error })
  }
}

function saveEvent(event: IEvent) {
  const address =
    event.location && event.location.address
      ? event.location.address
      : 'Nowhere'
  return axios
    .post(serviceUrl + '/events', {
      ...event,
      endDateTime: event.endDateTime.toISOString(),
      location: {
        ...event.location,
        address
      },
      startDateTime: event.startDateTime.toISOString()
    })
    .then(response => {
      const savedEvent = {
        ...response.data,
        endDateTime: moment(response.data.endDateTime),
        startDateTime: moment(response.data.startDateTime)
      }

      return savedEvent
    })
}

function* saveEventFlow(action: IAction) {
  const event: IEvent = action.payload
  try {
    const savedEvent = yield call(saveEvent, event)
    yield put({
      payload: savedEvent,
      type: EVENT_SAVED
    })
  } catch (err) {
    yield put({ type: EVENT_SAVE_ERROR, payload: err })
  }
}

function fetchEvents(userId: string) {
  return axios.get(serviceUrl + '/events?userId=' + userId).then(response =>
    response.data.map((event: IEvent) => ({
      ...event,
      endDateTime: moment(event.endDateTime),
      startDateTime: moment(event.startDateTime)
    }))
  )
}

function* fetchEventsFlow(action: IAction) {
  const userId: string = action.payload
  try {
    const events = yield call(fetchEvents, userId)
    const decoratedEvents = yield call(eventDecorator.decorateEvents, events)
    yield put({ type: EVENTS_FETCHED, payload: decoratedEvents })
  } catch (err) {
    yield put({ type: EVENTS_FETCH_ERROR, payload: err })
  }
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
