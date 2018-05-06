import React from 'react'
import { shallow } from 'enzyme'
import EventView from './EventView'

describe('<EventView />', () => {
  it('should render without crashing', () => {
    const match = { params: {} }
    const getEventById = () => {}
    const wrapper = shallow(
      <EventView match={match} getEventById={getEventById} />
    )

    expect(wrapper).toBeTruthy()
  })
})
