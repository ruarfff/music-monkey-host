import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import events from './event/eventReducer'
import eventView from './eventView/eventViewReducer'
import home from './home/homeReducer'
import playlists from './playlist/playlistReducer'
import preGame from './preGame/preGameReducer'
import track from './tracks/trackReducer'
import user from './user/userReducer'

const reducers = combineReducers({
  auth,
  events,
  eventView,
  home,
  playlists,
  preGame,
  track,
  user
})

export default reducers
