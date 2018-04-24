import { fork } from 'redux-saga/effects'
import { loginFlow, logoutFlow } from './auth/authSaga'
import { watchFetchUser } from './user/userSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'

export default function* saga() {
  yield [
    fork(loginFlow),
    fork(logoutFlow),
    fork(watchFetchUser),
    fork(watchFetchPlaylists)
  ]
}
