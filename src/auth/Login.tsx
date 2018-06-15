import * as React from 'react'
import Action from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import IAuthState from './IAuthState'
import './Login.css'
import logo from './spotify-login.svg'

const serviceUrl = process.env.REACT_APP_MM_API_URL

interface ILoginProps {
  auth: IAuthState
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

    const redirectToUrl =
      location.protocol +
      '//' +
      location.hostname +
      (location.port ? ':' + location.port : '') +
      '/callback'

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
