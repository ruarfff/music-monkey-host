import { all } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/authSaga'
import { watchFetchUser } from './user/userSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'
import {
  watchCreateEvent,
  watchUploadEventImage,
  watchUpdateLocationAutoComplete,
  watchCreateEventPlaylist,
  watchEventPlaylistCreated
} from './events/eventSaga'

export default function* saga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchFetchUser(),
    watchFetchPlaylists(),
    watchCreateEvent(),
    watchUploadEventImage(),
    watchUpdateLocationAutoComplete(),
    watchCreateEventPlaylist(),
    watchEventPlaylistCreated()
  ])
}
