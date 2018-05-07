import { all } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/authSaga'
import {
  watchCreateEvent,
  watchCreateEventPlaylist,
  watchEventPlaylistCreated,
  watchFetchEvents,
  watchUpdateLocationAutoComplete
} from './events/eventSaga'
import { watchFetchEventById } from './events/view/eventViewSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'
import { watchFetchUser } from './user/userSaga'

export default function* saga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchFetchUser(),
    watchFetchPlaylists(),
    watchCreateEvent(),
    watchUpdateLocationAutoComplete(),
    watchCreateEventPlaylist(),
    watchFetchEventById(),
    watchEventPlaylistCreated(),
    watchFetchEvents()
  ])
}
