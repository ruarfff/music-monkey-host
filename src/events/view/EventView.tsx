import { withStyles } from 'material-ui/styles'
import Zoom from 'material-ui/transitions/Zoom'
import * as React from 'react'
import lifecycle from 'react-pure-lifecycle'
import { RouteComponentProps } from 'react-router'
import IAction from '../../Action'
import LoadingSpinner from '../../loading/LoadingSpinner'
import IEvent from '../IEvent'
import EventFetchError from './EventFetchError'

const decorate = withStyles(({ palette, spacing }) => ({
  root: {
    padding: spacing.unit,
    backgroundColor: palette.background.default,
    color: palette.primary.main
  }
}))

interface IEventViewProps extends RouteComponentProps<any> {
  error?: Error
  event?: IEvent
  loading?: boolean
  getEventById(eventId: string): IAction
}

const callGetEventById = (props: IEventViewProps) => {
  return () => props.getEventById(props.match.params.eventId)
}

const componentDidMount = (props: IEventViewProps) => {
  callGetEventById(props)()
}

const methods = {
  componentDidMount
}

const renderEvent = (classes: any, event: IEvent) => <div>{event.eventId}</div>

const EventView = decorate<IEventViewProps>(
  ({ classes, loading, error, event, getEventById, match }) => (
    <div>
      {loading && <LoadingSpinner />}
      {!loading &&
        error && (
          <EventFetchError
            onTryAgain={callGetEventById({
              getEventById,
              match
            } as IEventViewProps)}
          />
        )}
      {!!event && (
        <Zoom in={!loading && !!event}>{renderEvent(classes, event)}</Zoom>
      )}
    </div>
  )
)

export default lifecycle(methods)(EventView)
