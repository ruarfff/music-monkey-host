import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    if (this.props.user.data) {
      const { email } = this.props.user.data
      return <h1>{email}</h1>
    } else {
      return <div>No user yet</div>
    }
  }
}

User.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default User
