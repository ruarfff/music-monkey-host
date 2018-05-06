import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Action from '../Action'
import User from './User'
import {IUserState} from './UserModel'

describe('User component', () => {
  it('renders without crashing', () => {
    const fetchUser = () =>({} as Action )
    const user = {} as IUserState
    const div = document.createElement('div')
    ReactDOM.render(<User fetchUser={fetchUser} user={user} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
