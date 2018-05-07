import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/ModeEdit'
import * as classNames from 'classnames'
import { Typography } from 'material-ui'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import red from 'material-ui/colors/red'
import Grid from 'material-ui/Grid'
import { Theme, withStyles, WithStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import Zoom from 'material-ui/transitions/Zoom'
import * as React from 'react'
import lifecycle from 'react-pure-lifecycle'
import { RouteComponentProps } from 'react-router'
import SwipeableViews from 'react-swipeable-views'
import IAction from '../../Action'
import LoadingSpinner from '../../loading/LoadingSpinner'
import LinkButton from '../../util/LinkButton'
import EventFetchError from '../EventFetchError'
import IEvent from '../IEvent'

interface IEventViewProps extends RouteComponentProps<any> {
  error?: Error
  event?: IEvent
  loading?: boolean
  eventTabIndex: number
  theme: any
  getEventById(eventId: string): IAction
  onEventTabIndexChange(index: number): IAction
}
type PropsWithStyles = IEventViewProps &
  WithStyles<'root' | 'button' | 'rightIcon' | 'deleteButton'>

const style = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  deleteButton: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
  }
})

const callGetEventById = (props: PropsWithStyles) => {
  return () => props.getEventById(props.match.params.eventId)
}

const componentDidMount = (props: PropsWithStyles) => {
  callGetEventById(props)()
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const handleTabChange = (props: IEventViewProps) => (
  event: any,
  index: number
) => {
  props.onEventTabIndexChange(index)
}

const renderEvent = (props: PropsWithStyles) => (
  <Grid container={true} spacing={8}>
    <Grid item={true} xs={12} sm={10}>
      <Typography variant="display3">
        {props.event && props.event.name}
      </Typography>
    </Grid>
    <Grid item={true} xs={6} sm={1}>
      <LinkButton
        className={props.classes.button}
        variant="raised"
        color="secondary"
        to={props.location.pathname + '/edit'}
      >
        Edit
        <EditIcon className={props.classes.rightIcon} />
      </LinkButton>
    </Grid>
    <Grid item={true} xs={6} sm={1}>
      <Button
        className={classNames(props.classes.button, props.classes.deleteButton)}
        variant="raised"
        color="secondary"
      >
        Delete
        <DeleteIcon className={props.classes.rightIcon} />
      </Button>
    </Grid>
    <Grid item={true} xs={12}>
      <AppBar position="static" color="default">
        <Tabs
          value={props.eventTabIndex}
          onChange={handleTabChange(props)}
          indicatorColor="primary"
          textColor="primary"
          fullWidth={true}
          centered={true}
        >
          <Tab label="Event" />
          <Tab label="Pre-Game" />
          <Tab label="In-Game" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={props.eventTabIndex}
        onChangeIndex={props.onEventTabIndexChange}
      >
        <TabContainer dir={props.theme.direction}>Item One</TabContainer>
        <TabContainer dir={props.theme.direction}>Item Two</TabContainer>
        <TabContainer dir={props.theme.direction}>Item Three</TabContainer>
      </SwipeableViews>
    </Grid>
  </Grid>
)

const EventView: React.SFC<PropsWithStyles> = (props: PropsWithStyles) => (
  <div>
    {props.loading && <LoadingSpinner />}
    {!props.loading &&
      props.error && <EventFetchError onTryAgain={callGetEventById(props)} />}
    {!!event && (
      <Zoom in={!props.loading && !!event}>{renderEvent(props)}</Zoom>
    )}
  </div>
)

export default lifecycle({
  componentDidMount
})(withStyles(style, { withTheme: true })<IEventViewProps>(EventView))
