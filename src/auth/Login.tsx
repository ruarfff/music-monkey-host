import * as React from 'react'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import ErrorNotification from '../util/ErrorNotification'
import IAuthState from './IAuthState'
import './Login.css'
import spotifyLoginButtonImage from './spotify-login.svg'

const serviceUrl = process.env.REACT_APP_MM_API_URL
const authSuffix = process.env.REACT_APP_AUTH_SUFFIX

interface ILoginProps {
  auth: IAuthState
  clearAuthError(): IAction
  login(): IAction
}

class Login extends React.Component<ILoginProps, {}> {
  public componentDidMount() {
    this.props.login()
  }

  public render() {
    const { isAuthenticating, authError } = this.props.auth
    if (isAuthenticating) {
      return <LoadingSpinner />
    }

    const spotifyLoginUrl = serviceUrl + '/auth/spotify-host' + authSuffix

    return (
      <div className="Login">
        <div className="Login-header">
          <h1 className="Login-title">Welcome to MusicMonkey for Hosts</h1>
        </div>
        <div className="Login-content">
          <div>
            <a href={spotifyLoginUrl}>
              <img
                src={spotifyLoginButtonImage}
                className="Login-spotify-button"
                alt="login"
              />
            </a>
          </div>

          {authError &&
            authError.errorContext === 'host-login' && (
              <ErrorNotification
                message={
                  (authError.response && authError.response.data) ||
                  authError.message
                }
                onClose={this.handleErrorAcknowledged}
              />
            )}
        </div>
      </div>
    )
  }
  private handleErrorAcknowledged = () => {
    this.props.clearAuthError()
  }
}

export default Login
