import React from 'react'
import { shallow } from 'enzyme'
import CreateEvent from './CreateEvent'

describe('<CreateEvent />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CreateEvent />)

    expect(wrapper).toBeTruthy()
  })
})

