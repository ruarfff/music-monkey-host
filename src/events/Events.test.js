import React from 'react'
import { shallow } from 'enzyme'
import Events from './Events'

describe('<Events />', () => {
  it('should render without crashing', () => {
    const events = { events: [] }
    const user = {}
    const getEvents = () => {}
    const wrapper = shallow(
      <Events events={events} user={user} getEvents={getEvents} />
    )

    expect(wrapper).toBeTruthy()
  })
})
