import * as React from 'react'
import { Redirect } from 'react-router'
import IAction from '../Action'

interface ICallbackProps {
  location: Location
  storeRefreshToken(token: string): IAction
}

const parseToken = (searchString: string): string =>
  searchString ? searchString.split('=')[1] : ''

class Callback extends React.Component<ICallbackProps, {}> {
  public componentWillMount() {
    const token = parseToken(this.props.location.search)
    if (token) {
      this.props.storeRefreshToken(token)
    }
  }

  public render() {
    return <Redirect to="/login" />
  }
}

export default Callback
