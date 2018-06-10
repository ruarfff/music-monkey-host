import { call, put, takeEvery } from 'redux-saga/effects'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import IEvent from '../event/IEvent'
import { REFRESH_EVENT_PLAYLIST } from '../eventView/eventViewActions'
import IAction from '../IAction'
import localStorage from '../storage/localStorage'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import { FETCH_SUGGESTIONS_INITIATED } from '../suggestion/suggestionActions'
import { acceptSuggestions } from '../suggestion/suggestionClient'
import {
  PRE_GAME_RESET_UNSAVED_PLAYLIST,
  SAVE_PRE_GAME_PLAYLIST,
  SAVE_PRE_GAME_PLAYLIST_ERROR,
  SAVE_PRE_GAME_PLAYLIST_SUCCESS
} from './pregameActions'

interface ISavePlaylistArgs {
  event: IEvent
  suggestions: Map<string, IDecoratedSuggestion>
}

function savePreGamePlaylist({ event, suggestions }: ISavePlaylistArgs) {
  const eventId = event.eventId || ''
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
  const trackUrisNotInPlaylist = suggestedTrackUris.filter(
    trackUri => !playlistTrackUris.includes(trackUri)
  )

  if (trackUrisNotInPlaylist.length < 1) {
    return acceptSuggestions(
      eventId,
      Array.from(suggestions.values()).map(s => s.suggestion)
    ).then(() => event)
  }

  return spotifyApi
    .addTracksToPlaylist(playlist.owner.id, playlist.id, trackUrisNotInPlaylist)
    .then(() => {
      return acceptSuggestions(
        eventId,
        Array.from(suggestions.values()).map(s => s.suggestion)
      )
    })
    .then(() => {
      return event
    })
}

function* savePreGamePlaylistFlow(action: IAction) {
  try {
    const event = yield call(savePreGamePlaylist, action.payload)
    yield put({ type: SAVE_PRE_GAME_PLAYLIST_SUCCESS, payload: event })
    yield put({ type: REFRESH_EVENT_PLAYLIST, payload: event.eventId })
    yield put({ type: PRE_GAME_RESET_UNSAVED_PLAYLIST })
    yield put({ type: FETCH_SUGGESTIONS_INITIATED, payload: event.eventId })
  } catch (err) {
    yield put({ type: SAVE_PRE_GAME_PLAYLIST_ERROR, payload: err })
  }
}

export function* watchSavePreGamePlaylist() {
  yield takeEvery(SAVE_PRE_GAME_PLAYLIST, savePreGamePlaylistFlow)
}
