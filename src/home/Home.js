import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoadingSpinner from '../loading/LoadingSpinner'
import Playlists from '../playlists/PlaylistContainer'
import MainAppBar from '../appbar/MainAppBar'
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
      return (
        <div>
          <MainAppBar user={this.props.user.data} />
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
