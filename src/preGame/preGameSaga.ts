import { call, put, takeEvery } from 'redux-saga/effects'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import IEvent from '../event/IEvent'
import { REFRESH_EVENT_PLAYLIST } from '../eventView/eventViewActions'
import IAction from '../IAction'
import localStorage from '../storage/localStorage'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import {
  SAVE_PRE_GAME_PLAYLIST,
  SAVE_PRE_GAME_PLAYLIST_ERROR,
  SAVE_PRE_GAME_PLAYLIST_SUCCESS
} from './pregameActions'

interface ISavePlaylistArgs {
  event: IEvent
  suggestions: Map<string, IDecoratedSuggestion>
}

function savePreGamePlaylist({ event, suggestions }: ISavePlaylistArgs) {
  const token = localStorage.get(accessTokenKey)
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  if (!event.playlist) {
    return new Promise((resolve, reject) =>
      reject(new Error('No Event Playlist'))
    )
  }
  const { playlist } = event
  const playlistTrackUris: string[] = playlist.tracks.items.map(
    pl => pl.track.uri
  )
  const suggestedTrackUris: string[] = Array.from(suggestions.keys())
  const suggestionsNotInPlaylist = suggestedTrackUris.filter(
    trackUri => !playlistTrackUris.includes(trackUri)
  )

  return spotifyApi
    .addTracksToPlaylist(
      playlist.owner.id,
      playlist.id,
      suggestionsNotInPlaylist
    )
    .then(() => event)
}

function* savePreGamePlaylistFlow(action: IAction) {
  try {
    const event = yield call(savePreGamePlaylist, action.payload)
    yield put({ type: SAVE_PRE_GAME_PLAYLIST_SUCCESS, payload: event })
    yield put({ type: REFRESH_EVENT_PLAYLIST, payload: event.eventId })
  } catch (err) {
    yield put({ type: SAVE_PRE_GAME_PLAYLIST_ERROR, payload: err })
  }
}

export function* watchSavePreGamePlaylist() {
  yield takeEvery(SAVE_PRE_GAME_PLAYLIST, savePreGamePlaylistFlow)
}
