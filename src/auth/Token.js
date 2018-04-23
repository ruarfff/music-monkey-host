/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React, { Component } from 'react'
import PropTypes, { instanceOf } from 'prop-types'

import Login from './Login';
import Playlists from '../playlists/Playlists'

class Token extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.refreshToken) {
      this.refreshAuth(this.props.refreshToken)
    } else {
      this.getUser()
    }
  }
  getUsersPlaylists = user => {
    const self = this
    const { cookies } = this.props
    const token = cookies.get('access_token')

    if (token) {
      const spotifyApi = new SpotifyWebApi()
      spotifyApi.setAccessToken(token)
      spotifyApi.getUserPlaylists().then(
        function(data) {
          self.setState({ ...self.state, user: user, playlists: data })
        },
        function(err) {
          console.error(err)
        }
      )
    }
  }

  render() {
    if (this.state.user) {
      return (
        <div>
          <h1>
            {this.state.user
              ? 'Welcome to Music Monkey for Hosts ' +
                this.state.user.display_name
              : ''}
          </h1>
          <Playlists playlists={this.state.playlists.items} />
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
  }
}

Token.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
  refreshToken: PropTypes.string
}

export default withCookies(Token)
