import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const dummyStore = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {}
  }
  const div = document.createElement('div')
  ReactDOM.render(<App store={dummyStore} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
