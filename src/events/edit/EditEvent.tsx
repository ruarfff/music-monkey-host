import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import * as React from 'react'
import lifecycle from 'react-pure-lifecycle'
import { RouteComponentProps } from 'react-router'
import IAction from '../../Action'

interface IEditEventProps extends RouteComponentProps<any> {
  getEventById(eventId: string): IAction
}
type PropsWithStyles = IEditEventProps & WithStyles<'root'>

const style = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  }
})

const callGetEventById = (props: PropsWithStyles) => {
  return () => props.getEventById(props.match.params.eventId)
}

const componentDidMount = (props: PropsWithStyles) => {
  callGetEventById(props)()
}

const EditEvent: React.SFC<PropsWithStyles> = (props: PropsWithStyles) => (
  <div>Edit Event</div>
)

export default lifecycle({
  componentDidMount
})(withStyles(style, { withTheme: true })<IEditEventProps>(EditEvent))
