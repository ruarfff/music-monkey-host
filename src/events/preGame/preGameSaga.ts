import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../../Action'
import suggestion from './mockData'
import {
  PRE_GAME_SUGGESTIONS_FETCH_ERROR,
  PRE_GAME_SUGGESTIONS_FETCH_INITIATED,
  PRE_GAME_SUGGESTIONS_FETCHED
} from './pregameActions'
// const serviceUrl = process.env.REACT_APP_MM_API_URL

function fetchPreGameSuggestion() {
  return new Promise((resolve, reject) => {
    resolve(suggestion)
  })
}
function* preGameSuggestionFlow(action: IAction) {
  try {
    const suggestions = yield call(fetchPreGameSuggestion)
    yield put({ type: PRE_GAME_SUGGESTIONS_FETCHED, payload: suggestions })
  } catch (err) {
    yield put({ type: PRE_GAME_SUGGESTIONS_FETCH_ERROR, payload: err })
  }
}

export function* watchFetchPreGameSuggestion() {
  yield takeEvery(PRE_GAME_SUGGESTIONS_FETCH_INITIATED, preGameSuggestionFlow)
}
