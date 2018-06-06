import { call, put, takeEvery } from 'redux-saga/effects'
import * as SpotifyWebApi from 'spotify-web-api-js'
import { accessTokenKey } from '../auth/authConstants'
import { REFRESH_EVENT_PLAYLIST } from '../eventView/eventViewActions'
import IAction from '../IAction'
import parsePlayistUrl from '../playlist/parsePlaylistUrl'
import localStorage from '../storage/localStorage'
import ITrack from '../track/ITrack'
import {
  SAVE_PRE_GAME_PLAYLIST,
  SAVE_PRE_GAME_PLAYLIST_ERROR,
  SAVE_PRE_GAME_PLAYLIST_SUCCESS
} from './pregameActions'

interface ISavePlaylistArgs {
  playlist: any
  playlistTracks: ITrack[]
}

function savePreGamePlaylist({ playlist, playlistTracks }: ISavePlaylistArgs) {
  const token = localStorage.get(accessTokenKey)
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  const { playlistId, userName }: any = parsePlayistUrl(playlist.playlistUrl)

  return spotifyApi
    .addTracksToPlaylist(userName, playlistId, playlistTracks.map(pl => pl.uri))
    .then(() => playlist)
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
