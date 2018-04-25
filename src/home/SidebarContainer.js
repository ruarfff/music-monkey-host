import { connect } from 'react-redux'
import {closeSidebar} from './homeActions'
import Sidebar from './Sidebar'


const mapStateToProps = state => ({ home: state.home })

const mapDispatchToProps = {closeSidebar}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
