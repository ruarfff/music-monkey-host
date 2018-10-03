import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import event from './event/eventReducer'
import eventPlaylist from './eventPlaylist/eventPlaylistReducer'
import eventView from './eventView/eventViewReducer'
import home from './home/homeReducer'
import playlist from './playlist/playlistReducer'
import suggestion from './suggestion/suggestionReducer'
import user from './user/userReducer'
import vote from './vote/voteReducer'
import account from './accountView/accountReducer'

const reducers = combineReducers({
  auth,
  event,
  eventPlaylist,
  eventView,
  home,
  playlist,
  suggestion,
  user,
  vote,
  account
})

export default reducers
