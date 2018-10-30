import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import event from './event/eventReducer'
import eventPlaylist from './eventPlaylist/eventPlaylistReducer'
import eventView from './eventView/eventViewReducer'
import home from './home/homeReducer'
import insights from './insights/insightsReducer'
import notification from './notification/notificationReducer'
import playlist from './playlist/playlistReducer'
import suggestion from './suggestion/suggestionReducer'
import user from './user/userReducer'
import vote from './vote/voteReducer'

const rootReducer = combineReducers({
  auth,
  event,
  eventPlaylist,
  eventView,
  home,
  playlist,
  suggestion,
  user,
  vote,
  insights,
  notification
})

export default rootReducer