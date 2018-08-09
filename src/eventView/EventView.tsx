import AppBar from '@material-ui/core/AppBar/AppBar'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import { Theme } from '@material-ui/core/styles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import Zoom from '@material-ui/core/Zoom/Zoom'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/ModeEdit'
import * as React from 'react'
import lifecycle from 'react-pure-lifecycle'
import { RouteComponentProps } from 'react-router'
import SwipeableViews from 'react-swipeable-views'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EventFetchError from '../event/EventFetchError'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import PreGameView from '../preGame/PreGameViewContainer'
import LinkButton from '../util/LinkButton'
import PulsingButton from '../util/PulsingButton'
import EventDetails from './EventDetails'
import InviteCopyAlert from './InviteCopyAlert'
import InviteLink from './InviteLink'

interface IEventViewProps extends RouteComponentProps<any> {
  error?: Error
  event: IEvent
  loading?: boolean
  eventTabIndex: number
  theme: any
  deleteSelected: boolean
  deleteSuccess: boolean
  deleteFailed: boolean
  copiedToClipboard: boolean
  getEventById(eventId: string): IAction
  onEventTabIndexChange(index: number): IAction
  onEventDeleteSelected(): IAction
  onEventDeleteClosed(): IAction
  deleteEvent(event: IEvent): IAction
  onDeleteAknowledged(): IAction
  copyEventInvite(): IAction
  ackowledgeEventInviteCopied(): IAction
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
  }
})

const SweetAlert = withReactContent(Swal) as any

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

const showDeleteSuccess = (props: PropsWithStyles) => {
  SweetAlert.fire({
    title: 'Event Deleted',
    type: 'success'
  }).then(() => {
    props.onDeleteAknowledged()
    props.onEventDeleteClosed()
  })
}

const showDeleteFailed = (props: PropsWithStyles) => {
  SweetAlert.fire({
    title: "Couldn't delete Event",
    text: 'Sorry. An error occurred when trying to delete this Event.',
    type: 'error'
  }).then(() => {
    props.onEventDeleteClosed()
  })
}

const handleDeleteSelected = (props: IEventViewProps) => () => {
  SweetAlert.fire({
    title: 'Are you sure?',
    text: 'This will completely remove this event',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result: any) => {
    if (result.value) {
      props.deleteEvent(props.event)
    }
    props.onEventDeleteClosed()
  })
}

const renderEventView = (props: PropsWithStyles) => {
  const { event, copyEventInvite } = props
  const inviteId = event.invites ? event.invites[0] : ''

  return (
    <Grid container={true} spacing={16}>
      <Grid item={true} xs={12} sm={4}>
        <Typography variant="display3" noWrap={true}>
          {props.event && props.event.name}
        </Typography>
      </Grid>
      <Grid item={true} xs={12} sm={4}>
        <InviteLink inviteId={inviteId} onCopyEventInvite={copyEventInvite} />
      </Grid>
      <Grid item={true} xs={12} sm={4}>
        <LinkButton
          className={props.classes.button}
          variant="raised"
          color="primary"
          to={props.location.pathname + '/edit'}
        >
          Edit
          <EditIcon className={props.classes.rightIcon} />
        </LinkButton>
        <Button
          className={props.classes.button}
          variant="raised"
          color="secondary"
          onClick={handleDeleteSelected(props)}
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
            scrollable={true}
            scrollButtons="auto"
          >
            <Tab label="Pre-Game" />
            <Tab label="In-Game" />
            <Tab label="Event" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={props.eventTabIndex}
          onChangeIndex={props.onEventTabIndexChange}
        >
          <TabContainer dir={props.theme.direction}>
            <PreGameView />
          </TabContainer>
          <TabContainer dir={props.theme.direction}>
            <PulsingButton />
          </TabContainer>
          <TabContainer dir={props.theme.direction}>
            <EventDetails event={props.event} />
          </TabContainer>
        </SwipeableViews>
      </Grid>
    </Grid>
  )
}

const EventView: React.SFC<PropsWithStyles> = (props: PropsWithStyles) => (
  <div>
    {props.loading && <LoadingSpinner />}
    {!props.loading &&
      props.error && <EventFetchError onTryAgain={callGetEventById(props)} />}
    {!!props.event && (
      <Zoom in={!props.loading && !!props.event}>{renderEventView(props)}</Zoom>
    )}
    {props.copiedToClipboard && (
      <InviteCopyAlert
        message="Copied to Clipboard"
        onClose={props.ackowledgeEventInviteCopied}
      />
    )}
    {props.deleteFailed && showDeleteFailed(props)}
    {props.deleteSuccess && showDeleteSuccess(props)}
  </div>
)

export default lifecycle({
  componentDidMount
})(withStyles(style, { withTheme: true })<IEventViewProps>(EventView))
