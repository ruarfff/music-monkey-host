import { connect } from 'react-redux'
import IRootState from '../rootState'
import { storeRefreshToken } from './authActions'
import Callback from './Callback'

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {
  storeRefreshToken
}

const CallbackContainer = connect(mapStateToProps, mapDispatchToProps)(Callback)

export default CallbackContainer
