import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import user from './user/userReducer'

const reducers = combineReducers({
    auth,
    user
})

export default reducers