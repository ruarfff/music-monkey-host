import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RouteWithSubRoutes } from '../routes'
import LoadingSpinner from '../loading/LoadingSpinner'
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
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      )
    } else {
      return <LoadingSpinner />
    }
  }
}

Home.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default Home
