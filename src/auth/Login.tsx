import * as React from 'react'
import Action from '../Action'
import LoadingSpinner from '../loading/LoadingSpinner'
import {IAuthState} from './AuthModel'
import './Login.css'
import logo from './spotify-login.svg'

const serviceUrl = process.env.REACT_APP_MM_API_URL
const redirectToUrl = process.env.REACT_APP_REDIRECT_URL

interface ILoginProps {
  auth: IAuthState,
  login(): Action
}

class Login extends React.Component<ILoginProps, {}> {
  public componentDidMount() {
    this.props.login()
  }

  public render() {
    if (this.props.auth.isAuthenticating) {
      return <LoadingSpinner />
    }
    return (
      <div className="Login">
        <div className="Login-header">
          <h1 className="Login-title">Welcome to MusicMonkey for Hosts</h1>
        </div>
        <div className="Login-content">
          <a href={serviceUrl + '/login?redirectTo=' + redirectToUrl}>
            <img src={logo} className="Login-button" alt="login" />
          </a>
        </div>
      </div>
    )
  }
}

export default Login
