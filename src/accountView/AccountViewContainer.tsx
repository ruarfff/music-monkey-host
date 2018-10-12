import { connect } from 'react-redux'
import IRootState from '../rootState'
import { updateUserRequest } from '../user/userActions'
import './accountStyles.css'
import AccountView from './AccountView'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data
})

const mapDispatchToProps = {
  updateUserRequest
}

const AccountViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountView)

export default AccountViewContainer
