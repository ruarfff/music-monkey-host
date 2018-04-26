import { call, put, takeEvery } from 'redux-saga/effects'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {
  EVENT_LOCATION_SELECTED,
  EVENT_LOCATION_POPULATED,
  EVENT_LOCATION_ERROR
} from './eventActions'

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

export function* watchUploadEventImage() {}

export function* watchUpdateLocationAutoComplete() {
  yield takeEvery(EVENT_LOCATION_SELECTED, fetchLatLngFlow)
}

export function* watchCreateEvent() {}
