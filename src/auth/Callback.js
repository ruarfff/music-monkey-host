import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import localStorage from '../storage/localStorage'
import { refreshTokenKey } from './authConstants'

const parseToken = searchString =>
  searchString ? searchString.split('=')[1] : ''

class Callback extends Component {
  componentWillMount() {
    const token = parseToken(this.props.location.search)
    if (token) {
      localStorage.set(refreshTokenKey, token)
    }
  }

  render() {
    return <Redirect to="/login" />
  }
}

Callback.propTypes = {
  location: PropTypes.object.isRequired
}

export default Callback
