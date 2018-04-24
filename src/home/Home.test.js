import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

describe('Home component', () => {
  xit('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
