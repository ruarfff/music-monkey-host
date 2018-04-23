import { all } from 'redux-saga/effects'
import { loginFlow, logoutFlow, storeRefreshToken } from './auth/authSaga'
import {} from './user/userSaga'

export default function* saga() {
  yield all([loginFlow, logoutFlow, storeRefreshToken])
}
