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
import {
  watchMoveItemInEventPlaylist,
  watchSaveEventPlaylist
} from './eventPlaylist/eventPlaylistSaga'
import {
  watchDeleteEvent,
  watchFetchEventById,
  watchRefreshEventPlaylist
} from './eventView/eventViewSaga'
import { watchFetchPlaylists } from './playlist/playlistSaga'
import {
  watchFetchSuggestions,
  watchRejectSuggestion
} from './suggestion/suggestionSaga'
import { watchFetchEventVotes } from './vote/voteSaga'

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
    watchRefreshEventPlaylist(),
    watchFetchSuggestions(),
    watchRejectSuggestion(),
    watchSaveEventPlaylist(),
    watchFetchEventVotes(),
    watchMoveItemInEventPlaylist()
  ])
}
