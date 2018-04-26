import React from 'react'
import renderer from 'react-test-renderer'
import MainAppBar from './MainAppBar'

describe('MainAppBar Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const user = {}
    const classes = {}
    const home = {}
    const openSidebar = () => {}
    const logout = () => {}
    const component = renderer.create(
      <MainAppBar
        user={user}
        classes={classes}
        home={home}
        openSidebar={openSidebar}
        logout={logout}
      />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
