import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../rootState'
import { fetchUser } from '../user/userActions'
import Home from './Home'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data
})

const mapDispatchToProps = {
  fetchUser
}

const HomeContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
)

export default HomeContainer
