import { connect } from 'react-redux'
import IRootState from '../rootState'
import { login } from './authActions'
import Login from './Login'

const mapStateToProps = (state: IRootState) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
