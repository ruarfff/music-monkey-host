import React from 'react'
import PropTypes from 'prop-types'
import './Home.css'

const parseToken = searchString =>
  searchString ? searchString.split('=')[1] : ''

const Home = ({ location }) => (
  <div className="Home-header">
    Home!!!!
  </div>
)

Home.propTypes = {
  location: PropTypes.object.isRequired
}

export default Home
