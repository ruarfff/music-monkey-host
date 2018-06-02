import * as queryString from 'query-string'
import * as React from 'react'
import { Redirect } from 'react-router'
import IAction from '../IAction'

interface ICallbackProps {
  location: Location
  storeRefreshToken(token: string): IAction
}

interface ICallbackParams {
  rt: string
}

const parseParams = (searchString: string): ICallbackParams => {
  const parsed = queryString.parse(searchString)

  return { rt: parsed.rt || '' }
}

class Callback extends React.Component<ICallbackProps, {}> {
  public componentWillMount() {
    const params = parseParams(this.props.location.search)
    if (params.rt) {
      this.props.storeRefreshToken(params.rt)
    }
  }

  public render() {
    return <Redirect to="/login" />
  }
}

export default Callback
