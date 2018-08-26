import { call, put, takeEvery } from 'redux-saga/effects'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import IEvent from '../event/IEvent'
import { EVENT_FETCH_BY_ID_INITIATED } from '../eventView/eventViewActions'
import IAction from '../IAction'
import { reOrderPlaylist } from '../playlist/playlistClient'
import localStorage from '../storage/localStorage'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import {
  FETCH_SUGGESTIONS_INITIATED,
  RESET_STAGED_SUGGESTIONS
} from '../suggestion/suggestionActions'
import { acceptSuggestions } from '../suggestion/suggestionClient'
import {
  MOVE_ITEM_IN_EVENT_PLAYLIST,
  SAVE_EVENT_PLAYLIST,
  SAVE_EVENT_PLAYLIST_ERROR,
  SAVE_EVENT_PLAYLIST_SUCCESS
} from './eventPlaylistActions'

interface ISavePlaylistArgs {
  event: IEvent
  suggestions: Map<string, IDecoratedSuggestion>
}

function saveEventPlaylist({ event, suggestions }: ISavePlaylistArgs) {
  const eventId = event.eventId || ''
  const token = localStorage.get(accessTokenKey)
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  if (!event.playlist) {
    return Promise.reject(new Error('No Event Playlist'))
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

function* saveEventPlaylistFlow(action: IAction) {
  try {
    const event = yield call(saveEventPlaylist, action.payload)
    yield put({ type: SAVE_EVENT_PLAYLIST_SUCCESS, payload: event })
    yield put({ type: RESET_STAGED_SUGGESTIONS })
    yield put({ type: EVENT_FETCH_BY_ID_INITIATED, payload: event.eventId })
    yield put({ type: FETCH_SUGGESTIONS_INITIATED, payload: event.eventId })
  } catch (err) {
    yield put({ type: SAVE_EVENT_PLAYLIST_ERROR, payload: err })
  }
}

export function* watchSaveEventPlaylist() {
  yield takeEvery(SAVE_EVENT_PLAYLIST, saveEventPlaylistFlow)
}

function moveItemInEventPlaylistFlow(action: IAction) {
  try {
    const { playlist, fromIndex, toIndex } = action.payload
    reOrderPlaylist(playlist, fromIndex, toIndex)
  } catch (err) {
    console.error(err)
  }
}

export function* watchMoveItemInEventPlaylist() {
  yield takeEvery(MOVE_ITEM_IN_EVENT_PLAYLIST, moveItemInEventPlaylistFlow)
}
