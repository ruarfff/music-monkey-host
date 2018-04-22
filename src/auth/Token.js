import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import logo from '../spotify-login.svg';
import Playlists from '../playlists/Playlists';

// const servieUrl = "http://localhost:8080";
// const redirectToUrl = "http://localhost:3000";

const servieUrl = 'http://music-monkey-api.eu-west-1.elasticbeanstalk.com';
const redirectToUrl =
  'http://musicmonkeyhost-hosting-mobilehub-246253618.s3-website.eu-west-1.amazonaws.com';

class Token extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    refreshToken: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.refreshToken) {
      this.refreshAuth(this.props.refreshToken);
    } else {
      this.getUser();
    }
  }

  refreshAuth = token => {
    const self = this;
    const { cookies } = this.props;
    axios
      .post(servieUrl + '/refresh', {
        refreshToken: token
      })
      .then(response => {
        cookies.set('refresh_token', token);
        cookies.set('access_token', response.data.access_token);
        self.getUser();
      })
      .catch(err => console.log(err));
  };

  getUser = () => {
    const self = this;
    const { cookies } = this.props;
    const token = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');

    if (token) {
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(token);

      spotifyApi.getMe().then(
        function(data) {
          self.getUsersPlaylists(data);
        },
        function(err) {
          if (err.status === 401) {
            self.refreshAuth(refreshToken);
          }
          console.error(err);
        }
      );
    }
  };

  getUsersPlaylists = user => {
    const self = this;
    const { cookies } = this.props;
    const token = cookies.get('access_token');

    if (token) {
      const spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(token);
      spotifyApi.getUserPlaylists().then(
        function(data) {
          self.setState({ ...self.state, user: user, playlists: data });
        },
        function(err) {
          console.error(err);
        }
      );
    }
  };

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
      );
    } else {
      return (
        <div>
          <h1 className="App-title">Welcome to MusicMonkey for Hosts</h1>
          <a href={servieUrl + '/login?redirectTo=' + redirectToUrl}>
            <img src={logo} className="App-login" alt="login" />
          </a>
        </div>
      );
    }
  }
}

export default withCookies(Token);
