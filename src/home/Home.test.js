import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('<Home />', () => {
  it('should render without crashing', () => {
    const fetchUser = () => {}
    const user = {}
    const wrapper = shallow(<Home fetchUser={fetchUser} user={user} />)

    expect(wrapper).toBeTruthy()
  })
})
