import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import { fetchUser } from '../user/userActions'
import Home from './Home'

const mapStateToProps = state => ({ auth: state.auth, user: state.user })

const mapDispatchToProps = {
  fetchUser
}

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))

export default HomeContainer
