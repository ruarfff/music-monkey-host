import { connect } from 'react-redux'
import {fetchUser} from './userActions'
import User from './User'

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = ({
    fetchUser
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer
