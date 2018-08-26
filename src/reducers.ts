import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import event from './event/eventReducer'
import eventPlaylist from './eventPlaylist/eventPlaylistReducer'
import eventView from './eventView/eventViewReducer'
import home from './home/homeReducer'
import playlist from './playlist/playlistReducer'
import preGame from './preGame/preGameReducer'
import suggestion from './suggestion/suggestionReducer'
import track from './track/trackReducer'
import user from './user/userReducer'
import vote from './vote/voteReducer'

const reducers = combineReducers({
  auth,
  event,
  eventPlaylist,
  eventView,
  home,
  playlist,
  preGame,
  suggestion,
  track,
  user,
  vote
})

export default reducers
