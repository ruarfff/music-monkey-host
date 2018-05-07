import { withStyles } from 'material-ui/styles'
import * as React from 'react'
import lifecycle from'react-pure-lifecycle'
import { RouteComponentProps } from 'react-router'
import Action from '../../Action'
import LoadingSpinner from '../../loading/LoadingSpinner'
import IEvent from '../IEvent'

const decorate = withStyles(({ palette, spacing }) => ({
  root: {
    padding: spacing.unit,
    backgroundColor: palette.background.default,
    color: palette.primary.main
  }
}))

interface IEventViewProps extends RouteComponentProps<any> {
  error: Error
  event: IEvent
  loading: boolean
  getEventById(eventId: string): Action
}

const componentDidMount = (props: IEventViewProps) => {
  props.getEventById(props.match.params.eventId)
}

const methods = {
  componentDidMount
}

const renderError = (error: Error) => (
  <h1>ERORORORORO {JSON.stringify(error)}</h1>
)

const renderEvent = (event: IEvent) => <div>{event.eventId}</div>

const EventView = decorate<IEventViewProps>(({ loading, error, event }) => (
  <div>
    {loading && <LoadingSpinner />}
    {!loading && error && renderError(error)}
    {!loading && event && renderEvent(event)}
  </div>
))

export default lifecycle(methods)(EventView)
