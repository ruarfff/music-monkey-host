import { connect } from 'react-redux'
import {openSidebar} from './homeActions'
import {logout} from '../auth/authActions'
import MainAppBar from './MainAppBar'


const mapStateToProps = state => ({ home: state.home })

const mapDispatchToProps = {openSidebar, logout}

const MainAppBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainAppBar)

export default MainAppBarContainer
