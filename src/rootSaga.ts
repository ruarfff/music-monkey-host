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
  watchUpdateEvent,
  watchUpdateLocationAutoComplete
} from './event/eventSaga'
import {
  watchMoveItemInEventPlaylist,
  watchSaveEventPlaylist,
  watchSortPlaylistByVotesDescending
} from './eventPlaylist/eventPlaylistSaga'
import {
  watchDeleteEvent,
  watchFetchEventById,
  watchFetchEventByIdNoLoading,
  watchRefreshEventPlaylist,
  watchToggleAutoAcceptSuggestions,
  watchToggleDynamicVoting,
  watchToggleSuggestingPlaylists
} from './eventView/eventViewSaga'
import { watchFetchNotificationsByUserId } from './notification/notificationSaga'
import {
  watchFetchPlaylists,
  watchFetchRemoveTrackFromPlaylist,
} from './playlist/playlistSaga'
import { watchfetchShareEmail } from './shareEvent/shareSaga'
import {
  watchFetchSuggestions,
  watchRejectSuggestion
} from './suggestion/suggestionSaga'
import { watchupdateUserFlow } from './user/userSaga'
import { watchFetchEventVotes } from './vote/voteSaga'

export default function* rootSaga() {
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
    watchMoveItemInEventPlaylist(),
    watchSortPlaylistByVotesDescending(),
    watchToggleDynamicVoting(),
    watchFetchEventByIdNoLoading(),
    watchToggleAutoAcceptSuggestions(),
    watchToggleSuggestingPlaylists(),
    watchUpdateEvent(),
    watchupdateUserFlow(),
    watchFetchNotificationsByUserId(),
    watchFetchRemoveTrackFromPlaylist(),
    watchfetchShareEmail(),
  ])
}