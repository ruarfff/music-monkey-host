import { connect } from 'react-redux'
import {openSidebar} from './homeActions'
import MainAppBar from './MainAppBar'


const mapStateToProps = state => ({ home: state.home })

const mapDispatchToProps = {openSidebar}

const MainAppBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainAppBar)

export default MainAppBarContainer
