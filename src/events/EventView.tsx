import { withStyles, WithStyles } from 'material-ui/styles'
import * as React from 'react'
import Action from '../Action'
import LoadingSpinner from '../loading/LoadingSpinner'
import { IEvent } from './EventModel'

import './EventView.css'

const decorate = withStyles(({ palette, spacing }) => ({
  root: {
    padding: spacing.unit,
    backgroundColor: palette.background.default,
    color: palette.primary.main
  }
}))

interface IEventViewProps {
  error: Error
  event: IEvent
  loading: boolean
  match: any
  getEventById(eventId: string): Action
}

const renderError = (error: Error) => (
  <h1>ERORORORORO {JSON.stringify(error)}</h1>
)

const renderEvent = (event: IEvent) => <div>{event.eventId}</div>

const EventView = decorate(
  class extends React.Component<IEventViewProps & WithStyles<'root'>, {}> {
    public componentDidMount() {
      this.props.getEventById(this.props.match.params.eventId)
    }

    public render() {
      const { loading, error, event } = this.props
      return (
        <div>
          {loading && <LoadingSpinner />}
          {(!loading && error) && renderError(error)}
          {(!loading && event) && renderEvent(event)}
        </div>
      )
    }
  }
)

export default EventView
