import React from 'react'
import { shallow } from 'enzyme'
import CreateEvent from './CreateEvent'

describe('<CreateEvent />', () => {
  it('should render without crashing', () => {
    const events = {}
    const locationChanged = () => {}
    const locationSelected = () => {}
    const eventContentUpdated = () => {}
    const eventImageUploaded = () => {}
    const eventImageUploadedError = () => {}
    const wrapper = shallow(
      <CreateEvent
        events={events}
        locationChanged={locationChanged}
        locationSelected={locationSelected}
        eventContentUpdated={eventContentUpdated}
        eventImageUploaded={eventImageUploaded}
        eventImageUploadError={eventImageUploadedError}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
