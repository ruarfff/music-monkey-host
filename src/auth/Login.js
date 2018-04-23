import React from 'react'
import logo from './spotify-login.svg'
import './Login.css'

const serviceUrl = process.env.REACT_APP_MM_API_URL
const redirectToUrl = process.env.REACT_APP_REDIRECT_URL

const Login = () => (
  <div>
    <h1 className="Login-title">Welcome to MusicMonkey for Hosts</h1>
    <a href={serviceUrl + '/login?redirectTo=' + redirectToUrl}>
      <img src={logo} className="Login-button" alt="login" />
    </a>
  </div>
)

export default Login
