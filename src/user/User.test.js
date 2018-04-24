import React from 'react'
import ReactDOM from 'react-dom'
import User from './User'

describe('User component', () => {
  it('renders without crashing', () => {
    const fetchUser = () => {}
    const user = {}
    const div = document.createElement('div')
    ReactDOM.render(<User fetchUser={fetchUser} user={user} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
