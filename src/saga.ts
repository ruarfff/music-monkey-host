import { all } from 'redux-saga/effects'
import { watchLogin, watchLogout } from './auth/authSaga'
import {
  watchCreateEvent,
  watchCreateEventPlaylist,
  watchEventPlaylistCreated,
  watchFetchEventById,
  watchFetchEvents,
  watchUpdateLocationAutoComplete
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
    watchUpdateLocationAutoComplete(),
    watchCreateEventPlaylist(),
    watchFetchEventById(),
    watchEventPlaylistCreated(),
    watchFetchEvents()
  ])
}
