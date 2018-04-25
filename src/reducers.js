import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import user from './user/userReducer'
import playlists from './playlists/playlistReducer'
import home from './home/homeReducer'

const reducers = combineReducers({
    auth,
    user,
    playlists,
    home
})

export default reducers