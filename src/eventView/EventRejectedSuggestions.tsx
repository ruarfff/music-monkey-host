import { ListItemIcon } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Typography from '@material-ui/core/Typography/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import * as React from 'react'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import './EventSuggestions.css'

interface IEventRejectedSuggestionsProps {
  suggestions: IDecoratedSuggestion[]
}

export default class EventRejectedSuggestions extends React.PureComponent<
  IEventRejectedSuggestionsProps
> {
  public render() {
    const { suggestions } = this.props
    if (!suggestions || suggestions.length < 1) {
      return (
        <Typography align="center" variant="subheading">
          Currently no Rejected Suggestions
        </Typography>
      )
    }
    return (
      <div className="EventSuggestions-root">
        <Grid container={true} spacing={24}>
          <Grid item={true} sm={12}>
            <List>
              {suggestions.map(decoratedSuggestion =>
                this.renderSuggestion(decoratedSuggestion)
              )}
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }

  private renderSuggestion = (decoratedSuggestion: IDecoratedSuggestion) => {
    const { track, user } = decoratedSuggestion
    let trackImage = <span />
    if (track.album && track.album.images && track.album.images.length > 0) {
      trackImage = (
        <ListItemIcon>
          <img
            className="EventSuggestions-trackImage"
            src={track.album.images[track.album.images.length - 1].url}
            alt={track.name}
          />
        </ListItemIcon>
      )
    }
    let userAccountIcon = (
      <AccountCircle className="EventSuggestions-avatar-small" />
    )
    if (user.image) {
      userAccountIcon = (
        <Avatar
          alt={user.displayName}
          src={user.image}
          className="EventSuggestions-avatar"
        />
      )
    }

    return (
      <ListItem dense={true} button={true} key={track.uri}>
        {trackImage}
        <ListItemText primary={track.name} />

        {track.preview_url && (
          <audio
            src={track.preview_url}
            controls={true}
            className="EventSuggestions-audio"
            preload="none"
          />
        )}

        {userAccountIcon}
      </ListItem>
    )
  }
}
