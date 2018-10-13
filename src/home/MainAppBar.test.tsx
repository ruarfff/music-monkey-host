import { shallow } from 'enzyme'
import * as React from 'react'
import IEvent from 'src/event/IEvent'
import IAction from '../IAction'
import IUser from '../user/IUser'
import MainAppBar from './MainAppBar'

describe('<MainAppBar />', () => {
  it('should render without crashing', () => {
    const user = {} as IUser
    const event = {} as IEvent
    const location = ''
    const logout = () => ({} as IAction)
    const handleTitleClicked = () => {
      /*void*/
    }

    const wrapper = shallow(
      <MainAppBar
        user={user}
        event={event}
        location={location}
        logout={logout}
        handleTitleClicked={handleTitleClicked}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
