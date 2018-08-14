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
} from './event/eventSaga'
import { watchSaveEventPlaylist } from './eventView/eventPlaylistSaga'
import {
  watchDeleteEvent,
  watchFetchEventById,
  watchRefreshEventPlaylist
} from './eventView/eventViewSaga'
import { watchFetchPlaylists } from './playlist/playlistSaga'
import { watchSavePreGamePlaylist } from './preGame/preGameSaga'
import {
  watchFetchSuggestions,
  watchRejectSuggestion
} from './suggestion/suggestionSaga'

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
    watchSavePreGamePlaylist(),
    watchRefreshEventPlaylist(),
    watchFetchSuggestions(),
    watchRejectSuggestion(),
    watchSaveEventPlaylist()
  ])
}
