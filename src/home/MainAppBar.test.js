import React from 'react'
import { shallow } from 'enzyme'
import MainAppBar from './MainAppBar'

describe('<MainAppBar />', () => {
  it('should render without crashing', () => {
    const user = {}
    const classes = {}
    const home = {}
    const openSidebar = () => {}
    const logout = () => {}
    const wrapper = shallow(
      <MainAppBar
        user={user}
        classes={classes}
        home={home}
        openSidebar={openSidebar}
        logout={logout}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
