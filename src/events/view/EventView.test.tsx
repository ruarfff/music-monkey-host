import { shallow } from 'enzyme'
import * as React from 'react'
import IAction from '../../Action'
import EventView from './EventView'

describe('<EventView />', () => {
  it('should render without crashing', () => {
    const match = { params: {} }
    const error = {}
    const loading = false
    const getEventById = (): IAction => ({} as IAction)
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
