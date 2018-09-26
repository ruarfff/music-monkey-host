import { Avatar } from '@material-ui/core'
import { WithStyles } from '@material-ui/core/es'
import Grid from '@material-ui/core/Grid/Grid'
import withStyle from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import * as React from 'react'
import InviteLink from '../components/InviteLink/InviteLink'
import IEvent from '../event/IEvent'
import IEventGuest from '../event/IEventGuest'
import IAction from '../IAction'
import './EventSuggestions.css'

const decorated = withStyle(() => ({
  noAvatar: {
    fontSize: '40px',
  },
  inviteLink: {
    marginTop: '20px',
  },
  guestListTitle: {
    fontSize: '20px',
    marginBottom: '20px',
  }
}))

type IEventGuestsRightSideViewClasses =
  'noAvatar' |
  'inviteLink' |
  'guestListTitle'

interface IEventGuestsRightSideViewProps {
  event: IEvent
  copyEventInvite(): IAction
}

class EventGuestsRightSideView extends React.PureComponent<
  IEventGuestsRightSideViewProps & WithStyles<IEventGuestsRightSideViewClasses>
  > {
  public render() {
    const { event, copyEventInvite, classes } = this.props
    if (!event || !event.guests || event.guests.length < 1) {
      return (
        <Typography align="center" variant="subheading">
          No guests have opened their invite yet.
        </Typography>
      )
    }

    const inviteId = event && event.invites ? event.invites[0] : ''

    return (
      <div className="EventSuggestions-root">
        <Grid container={true} justify={'center'} spacing={24}>
          <Grid item={true} sm={12}>
            <Typography className={classes.guestListTitle} align="center" variant="subheading">
              Guest List
            </Typography>
            <Grid container={true} justify={'space-evenly'}>
              {event.guests.map(eventGuest =>
                this.renderEventGuest(eventGuest, classes)
              )}
            </Grid>
          </Grid>
          <Grid className={classes.inviteLink} item={true}>
            <InviteLink
              inviteId={inviteId}
              onCopyEventInvite={copyEventInvite}
            />
          </Grid>
        </Grid>
      </div>
    )
  }

  private renderEventGuest = (eventGuest: IEventGuest, classes: any) => {
    const { user } = eventGuest
    return (
      <Grid item={true} key={user.userId}>
        {user.image && <Avatar alt={user.displayName} src={user.image} />}
        {!user.image && <AccountCircle className={classes.noAvatar} />}
      </Grid>
    )
  }
}


export default decorated(EventGuestsRightSideView)