import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction'
import IDecoratedSuggestion from './IDecoratedSuggestion'
import {
  DELETE_SUGGESTION_FAILED,
  DELETE_SUGGESTION_INITIATED,
  DELETE_SUGGESTION_SUCCESS,
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS,
  SAVE_SUGGESTION_FAILED,
  SAVE_SUGGESTION_INITIATED,
  SAVE_SUGGESTION_SUCCESS
} from './suggestionActions'
import {
  deleteSuggestion,
  getEventSuggestions,
  saveSuggestion
} from './suggestionClient'

function* fetchSuggestionsFlow(action: IAction) {
  try {
    const suggestions: IDecoratedSuggestion[] = yield call(
      getEventSuggestions,
      action.payload
    )
    yield put({
      type: FETCH_SUGGESTIONS_SUCCESS,
      payload: suggestions
    })
  } catch (err) {
    yield put({ type: FETCH_SUGGESTIONS_FAILED, payload: err })
  }
}

export function* watchFetchSuggestions() {
  yield takeEvery(FETCH_SUGGESTIONS_INITIATED, fetchSuggestionsFlow)
}

function* saveSuggestionFlow(action: IAction) {
  try {
    const savedSuggestion = yield call(saveSuggestion, action.payload)
    yield put({ type: SAVE_SUGGESTION_SUCCESS, payload: savedSuggestion })
  } catch (err) {
    yield put({ type: SAVE_SUGGESTION_FAILED, payload: err })
  }
}

export function* watchSaveSuggestion() {
  yield takeEvery(SAVE_SUGGESTION_INITIATED, saveSuggestionFlow)
}

function* deleteSuggestionFlow(action: IAction) {
  try {
    yield call(deleteSuggestion, action.payload)
    yield put({ type: DELETE_SUGGESTION_SUCCESS })
  } catch (err) {
    yield put({ type: DELETE_SUGGESTION_FAILED, payload: err })
  }
}

export function* watchDeleteSuggestion() {
  yield takeEvery(DELETE_SUGGESTION_INITIATED, deleteSuggestionFlow)
}
