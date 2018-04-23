import { fork } from 'redux-saga/effects'
import { loginFlow, logoutFlow } from './auth/authSaga'
import {} from './user/userSaga'

export default function* saga() {
  yield [fork(loginFlow), fork(logoutFlow)]
}
