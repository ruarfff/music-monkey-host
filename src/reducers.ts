import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import events from './events/eventReducer'
import eventView from './events/view/eventViewReducer'
import home from './home/homeReducer'
import playlists from './playlists/playlistReducer'
import user from './user/userReducer'

const reducers = combineReducers({
  auth,
  events,
  eventView,
  home,
  playlists,
  user
})

export default reducers
