import { connect } from 'react-redux'
import { openSidebar, openAvatarMenu, closeAvatarMenu } from './homeActions'
import { logout } from '../auth/authActions'
import MainAppBar from './MainAppBar'

const mapStateToProps = state => ({ home: state.home, user: state.user.data })

const mapDispatchToProps = {
  closeAvatarMenu,
  logout,
  openAvatarMenu,
  openSidebar
}

const MainAppBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  MainAppBar
)

export default MainAppBarContainer
