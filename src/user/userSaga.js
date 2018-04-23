import {take, put, call, fork, cancel} from 'redux-saga/effects';
import SpotifyWebApi from 'spotify-web-api-js'

const getUser = () => {
    const self = this
    const { cookies } = this.props
    const token = cookies.get('access_token')
    const refreshToken = cookies.get('refresh_token')

    if (token) {
      const spotifyApi = new SpotifyWebApi()
      spotifyApi.setAccessToken(token)

      spotifyApi.getMe().then(
        function(data) {
          self.getUsersPlaylists(data)
        },
        function(err) {
          if (err.status === 401) {
            self.refreshAuth(refreshToken)
          }
          console.error(err)
        }
      )
    }
  }

