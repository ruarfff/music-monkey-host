import { call, put, takeEvery } from 'redux-saga/effects'
import IAction from '../IAction'
import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST
} from './userActions'
import { updateUserById } from './userClient'
import IUser from './IUser'

function* updateUserFlow(action: IAction) {
  const user: IUser = action.payload

  try {
    const editedUser = yield call(updateUserById, user)
    console.log(editedUser)
    yield put({
      payload: editedUser,
      type: UPDATE_USER_SUCCESS
    })
  } catch (err) {
    yield put({ type: UPDATE_USER_FAILURE, payload: err })
  }
}

export function* watchupdateUserFlow() {
  yield takeEvery(UPDATE_USER_REQUEST, updateUserFlow)
}
