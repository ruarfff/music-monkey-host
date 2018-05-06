import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import events from './events/eventReducer' 
import home from './home/homeReducer'
import playlists from './playlists/playlistReducer'
import user from './user/userReducer'

const reducers = combineReducers({
    auth,
    events,
    home,
    playlists,
    user
})

export default reducers