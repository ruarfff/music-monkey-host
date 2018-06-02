import { shallow } from 'enzyme'
import * as React from 'react'
import IAction from '../../IAction'
import EditEvent from './EditEvent'

describe('<EditEvent />', () => {
  it('should render without crashing', () => {
    const match = { params: {} }
    const error = {}
    const loading = false
    const getEventById = (): IAction => ({} as IAction)
    const wrapper = shallow(
      <EditEvent
        match={match}
        getEventById={getEventById}
        error={error}
        loading={loading}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
