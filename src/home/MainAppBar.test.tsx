import { shallow } from 'enzyme'
import * as React from 'react'
import IAction from '../IAction'
import IUser from '../user/IUser'
import MainAppBar from './MainAppBar'

describe('<MainAppBar />', () => {
  it('should render without crashing', () => {
    const user = {} as IUser
    const logout = () => ({} as IAction)
    const handleTitleClicked = () => ({})

    const wrapper = shallow(
      <MainAppBar
        user={user}
        logout={logout}
        handleTitleClicked={handleTitleClicked}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
