import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './spotify-login.svg'
import LoadingSpinner from '../loading/LoadingSpinner'
import './Login.css'

const serviceUrl = process.env.REACT_APP_MM_API_URL
const redirectToUrl = process.env.REACT_APP_REDIRECT_URL

class Login extends Component {
  componentDidMount() {
    this.props.login()
  }

  render() {
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default Login
