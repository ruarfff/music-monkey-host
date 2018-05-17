import { all } from 'redux-saga/effects'
import {
  watchLogin,
  watchLogout,
  watchRefresh,
  watchStoreRefreshToken
} from './auth/authSaga'
import {
  watchCreateEvent,
  watchCreateEventPlaylist,
  watchEventPlaylistCreated,
  watchFetchEvents,
  watchUpdateLocationAutoComplete
} from './events/eventSaga'
import {
  watchFetchPreGameSuggestion,
  watchSavePreGamePlaylist
} from './events/preGame/preGameSaga'
import {
  watchDeleteEvent,
  watchFetchEventById
} from './events/view/eventViewSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'

export default function* saga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchFetchPlaylists(),
    watchCreateEvent(),
    watchUpdateLocationAutoComplete(),
    watchCreateEventPlaylist(),
    watchFetchEventById(),
    watchEventPlaylistCreated(),
    watchFetchEvents(),
    watchStoreRefreshToken(),
    watchRefresh(),
    watchDeleteEvent(),
    watchFetchPreGameSuggestion(),
    watchSavePreGamePlaylist()
  ])
}
