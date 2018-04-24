import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'

xit('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login auth={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
