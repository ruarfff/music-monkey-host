import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../../Action'
import {
  PRE_GAME_SUGGESTIONS_FETCH_ERROR,
  PRE_GAME_SUGGESTIONS_FETCH_INITIATED,
  PRE_GAME_SUGGESTIONS_FETCHED
} from './pregameActions'
import SuggestionDecorator from './SuggestionDecorator'
 
const serviceUrl = process.env.REACT_APP_MM_API_URL
const suggestionDecorator:SuggestionDecorator = new SuggestionDecorator()

function fetchPreGameSuggestion(eventId: string) {

  return axios
    .get(
      serviceUrl +
        '/suggestions?eventId=' + eventId 
    )
    .then(response => suggestionDecorator.decorateSuggestions(response.data))  
}
function* preGameSuggestionFlow(action: IAction) {
  try {
    const suggestions = yield call(fetchPreGameSuggestion, action.payload)
    yield put({ type: PRE_GAME_SUGGESTIONS_FETCHED, payload: suggestions })
  } catch (err) {
    yield put({ type: PRE_GAME_SUGGESTIONS_FETCH_ERROR, payload: err })
  }
}

export function* watchFetchPreGameSuggestion() {
  yield takeEvery(PRE_GAME_SUGGESTIONS_FETCH_INITIATED, preGameSuggestionFlow)
}
