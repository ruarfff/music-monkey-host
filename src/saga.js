import { all } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/authSaga'
import { watchFetchUser } from './user/userSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'

export default function* saga() {
  yield all([watchLogin(), watchLogout(), watchFetchUser(), watchFetchPlaylists()])
}
