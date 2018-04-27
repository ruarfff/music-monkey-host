import React from 'react'
import { shallow } from 'enzyme'
import CreateEvent from './CreateEvent'

describe('<CreateEvent />', () => {
  it('should render without crashing', () => {
    const events = {}
    const locationChanged = () => {}
    const locationSelected = () => {}
    const eventContentUpdated = () => {}
    const wrapper = shallow(
      <CreateEvent
        events={events}
        locationChanged={locationChanged}
        locationSelected={locationSelected}
        eventContentUpdated={eventContentUpdated}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
