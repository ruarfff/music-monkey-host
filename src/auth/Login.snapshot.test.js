import React from 'react'
import renderer from 'react-test-renderer'
import Login from './Login'

describe('Login Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const auth = {}
    const login = () => {}
    const component = renderer.create(<Login auth={auth} login={login} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
