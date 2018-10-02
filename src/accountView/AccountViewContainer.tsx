import { connect } from 'react-redux'
import IRootState from '../rootState'
import { saveAccountChanges, uploadAvatar} from './accountAction'
import './accountStyles.css'
import AccountView from './AccountView'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data
})

const mapDispatchToProps = {
  uploadAvatar,
  saveAccountChanges,
}

const AccountViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountView)

export default AccountViewContainer
