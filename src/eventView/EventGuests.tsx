import { Avatar, Chip, ListItem, ListItemText } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import Typography from '@material-ui/core/Typography/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IEventGuest from '../event/IEventGuest'
import './EventSuggestions.css'

interface IEventGuestsProps {
  event: IEvent
}

export default class EventGuests extends React.PureComponent<
  IEventGuestsProps
> {
  public render() {
    const { event } = this.props
    if (!event || !event.guests || event.guests.length < 1) {
      return (
        <Typography align="center" variant="subheading">
          No guests have opened their invited yet.
        </Typography>
      )
    }
    return (
      <div className="EventSuggestions-root">
        <Grid container={true} spacing={24}>
          <Grid item={true} sm={12}>
            <List>
              {event.guests.map(eventGuest =>
                this.renderEventGuest(eventGuest)
              )}
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }

  private renderEventGuest = (eventGuest: IEventGuest) => {
    const { user, rsvp } = eventGuest
    const name = !user.displayName
      ? user.isGuest
        ? 'Logged in as guest'
        : 'Anonymous'
      : user.displayName
    return (
      <ListItem key={user.userId} dense={true}>
        {user.image && <Avatar alt={user.displayName} src={user.image} />}
        {!user.image && <AccountCircle />}
        <ListItemText primary={name} />
        <Chip label={rsvp.status} />
      </ListItem>
    )
  }
}
