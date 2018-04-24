import React from 'react'
import { shallow } from 'enzyme'
import Events from './Events'

describe('<Events />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Events />)

    expect(wrapper).toBeTruthy()
  })
})

