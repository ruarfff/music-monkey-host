import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction'
import {
  FETCH_SUGGESTIONS_FAILED,
  FETCH_SUGGESTIONS_INITIATED,
  FETCH_SUGGESTIONS_SUCCESS
} from './suggestionActions'
import { getEventSuggestions } from './suggestionClient'
import SuggestionDecorator from './SuggestionDecorator'

const suggestionDecorator = new SuggestionDecorator()

function* fetchSuggestionsFlow(action: IAction) {
  try {
    const suggestions = yield call(getEventSuggestions, action.payload)
    const decoratedSuggestions = yield call(
      suggestionDecorator.decorateSuggestions,
      suggestions
    )
    yield put({
      type: FETCH_SUGGESTIONS_SUCCESS,
      payload: decoratedSuggestions
    })
  } catch (err) {
    yield put({ type: FETCH_SUGGESTIONS_FAILED, payload: err })
  }
}

export function* watchFetchSuggestions() {
  yield takeEvery(FETCH_SUGGESTIONS_INITIATED, fetchSuggestionsFlow)
}
