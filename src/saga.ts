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
  watchDeleteEvent,
  watchFetchEventById,
  watchRefreshEventPlaylist
} from './eventView/eventViewSaga'
import { watchFetchPlaylists } from './playlists/playlistSaga'
import {
  watchFetchPreGameSuggestion,
  watchSavePreGamePlaylist
} from './preGame/preGameSaga'

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
    watchSavePreGamePlaylist(),
    watchRefreshEventPlaylist()
  ])
}
