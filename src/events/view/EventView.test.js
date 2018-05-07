import React from 'react'
import { shallow } from 'enzyme'
import EventView from './EventView'

describe('<EventView />', () => {
  it('should render without crashing', () => {
    const match = { params: {} }
    const error = {}
    const loading = false
    const getEventById = () => {}
    const wrapper = shallow(
      <EventView
        match={match}
        getEventById={getEventById}
        error={error}
        loading={loading}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
