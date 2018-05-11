import { shallow } from 'enzyme'
import * as React from 'react'
import IAction from '../../Action'
import IEvent from '../IEvent'
import PreGameView from './PreGameView'

describe('<PreGameView />', () => {
  it('should render without crashing', () => {
    const event = {} as IEvent
    const preGameTabIndex = 0
    const onPreGameTabIndexChange = () => ({} as IAction)
    const fetchPreGameSuggestion = () => ({} as IAction)
    const wrapper = shallow(
      <PreGameView
        event={event}
        preGameTabIndex={preGameTabIndex}
        onPreGameTabIndexChange={onPreGameTabIndexChange}
        fetchPreGameSuggestion={fetchPreGameSuggestion}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
