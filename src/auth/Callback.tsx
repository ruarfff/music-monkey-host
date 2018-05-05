import * as React from 'react'
import { Redirect } from 'react-router'
import localStorage from '../storage/localStorage'
import { refreshTokenKey } from './authConstants'

interface ICallbackProps {
  location: Location
}

const parseToken = (searchString: string): string =>
  searchString ? searchString.split('=')[1] : ''

class Callback extends React.Component<ICallbackProps, {}> {
  public componentWillMount() {
    const token = parseToken(this.props.location.search)
    if (token) {
      localStorage.set(refreshTokenKey, token)
    }
  }

  public render() {
    return <Redirect to="/login" />
  }
}

export default Callback
