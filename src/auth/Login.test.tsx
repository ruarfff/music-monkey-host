import { shallow } from 'enzyme'
import * as React from 'react'
import Action from '../Action'
import { IAuthState } from './AuthModel'
import Login from './Login'

describe('<Login />', () => {
  it('should render without crashing', () => {
    const auth = {} as IAuthState
    const login = () => ({} as Action)
    const wrapper = shallow(<Login auth={auth} login={login} />)

    expect(wrapper).toBeTruthy()
  })
})

