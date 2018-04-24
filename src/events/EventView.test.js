import React from 'react'
import { shallow } from 'enzyme'
import EventView from './EventView'

describe('<EventView />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<EventView />)

    expect(wrapper).toBeTruthy()
  })
})
