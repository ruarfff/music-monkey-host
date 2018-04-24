import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'

describe('<Login />', () => {
  it('should render without crashing', () => {
    const auth = {}
    const login = () => {}
    const wrapper = shallow(<Login auth={auth} login={login} />)

    expect(wrapper).toBeTruthy()
  })
})

