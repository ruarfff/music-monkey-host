import { call, put, takeEvery } from 'redux-saga/effects'
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
  EVENT_CONTENT_UPDATED
} from './eventActions'

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

export function* watchCreateEvent() {}
