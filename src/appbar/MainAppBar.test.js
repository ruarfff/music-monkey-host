import React from 'react'
import { shallow } from 'enzyme'
import MainAppBar from './MainAppBar'

describe('<MainAppBar />', () => {
  it('should render without crashing', () => {
    const user = {}
    const mainAppBar = shallow(<MainAppBar user={user} />)

    expect(mainAppBar).toBeTruthy()
  })
})
