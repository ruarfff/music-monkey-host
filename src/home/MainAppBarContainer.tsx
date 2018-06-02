import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { logout } from '../auth/authActions'
import IRootState from '../rootState'
import MainAppBar from './MainAppBar'



const mapStateToProps = (state: IRootState) => ({ user: state.user.data })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleTitleClicked: () => {
    dispatch(push('/'))
  },
  ...bindActionCreators({logout}, dispatch)
})

const MainAppBarContainer = connect(mapStateToProps, mapDispatchToProps)(
  MainAppBar
)

export default MainAppBarContainer
