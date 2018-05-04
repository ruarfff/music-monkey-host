import { all } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/authSaga'
import {
  watchCreateEvent,
  watchCreateEventPlaylist,
  watchEventPlaylistCreated,
  watchFetchEvents,
  watchUpdateLocationAutoComplete,
  watchUploadEventImage
} from './events/eventSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'
import { watchFetchUser } from './user/userSaga'

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
    watchEventPlaylistCreated(),
    watchFetchEvents()
  ])
}
