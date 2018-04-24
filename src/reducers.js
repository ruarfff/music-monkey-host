import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import user from './user/userReducer'
import playlists from './playlists/playlistReducer'

const reducers = combineReducers({
    auth,
    user,
    playlists
})

export default reducers