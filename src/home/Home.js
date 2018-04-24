import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import LoadingSpinner from '../loading/LoadingSpinner'
import Playlists from '../playlists/PlaylistContainer'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avatarMenuOpen: false
    }
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    if (this.props.user.data) {
      const { images } = this.props.user.data

      return (
        <div>
          <AppBar
            title="MusicMonkey"
            titleStyle={{
              textAlign: 'center',
              color: '#ffffff',
              fontFamily: '‘Lucida Console’, Monaco, monospace'
            }}
            iconElementRight={
              <div>
                <Avatar
                  src={images[0].url}
                  size={30}
                  style={{ margin: 5 }}
                  className="hvr-grow"
                />
              </div>
            }
            iconElementLeft={<span />}
          />

          <Playlists />
          
        </div>
      )
    } else {
      return <LoadingSpinner />
    }
  }
}

Home.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default Home
