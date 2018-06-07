import { shallow } from 'enzyme'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import PreGameView from './PreGameView'

describe('<PreGameView />', () => {
  it('should render without crashing', () => {
    const event = {} as IEvent
    const preGameTabIndex = 0
    const onPreGameTabIndexChange = () => ({} as IAction)
    const getEventSuggestions = () => ({} as IAction)
    const wrapper = shallow(
      <PreGameView
        event={event}
        preGameTabIndex={preGameTabIndex}
        onPreGameTabIndexChange={onPreGameTabIndexChange}
        getEventSuggestions={getEventSuggestions}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
