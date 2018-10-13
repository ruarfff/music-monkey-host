import { ListItemIcon } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import * as moment from 'moment'
import * as React from 'react'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ISuggestion from '../suggestion/ISuggestion'
import ITrack from '../track/ITrack'
import './EventSuggestions.scss'

const decorate = withStyles(() => ({
  reject: {
    background: '#EB5757',
    color: 'white'
  },
  accept: {
    background: '#27AE60',
    color: 'white'
  },
  trackBand: {
    padding: 0,
    fontWeight: 800,
  },
  trackName: {
    padding: 0,
  },
  listItem: {
    borderBottom: '1px solid #979797'
  },
  listItemContent: {
    maxWidth: '700px'
  }
}))

interface IEventRejectedSuggestionsProps {
  suggestions: IDecoratedSuggestion[]
  stageSuggestion(suggestion: ISuggestion): IAction
}

class EventMaybeSuggestions extends React.PureComponent<
  IEventRejectedSuggestionsProps & WithStyles
  > {

  public state = {
    tracksBeingRemoved: {}
  }

  public render() {
    const { suggestions } = this.props
    const filteredSuggestions = suggestions.filter(suggest => !suggest.suggestion.accepted)
    if (!filteredSuggestions || filteredSuggestions.length < 1) {
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
              {filteredSuggestions.map((decoratedSuggestion, i)=>
                this.renderSuggestion(decoratedSuggestion, i)
              )}
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }

  private handleSuggestionAccepted = (
    decoratedSuggestion: IDecoratedSuggestion
  ) => () => {
    const { track, suggestion } = decoratedSuggestion
    this.setState({ tracksBeingRemoved: track })
    setTimeout(() => {
      this.setState({ tracksBeingRemoved: {} as ITrack })
      this.props.stageSuggestion(suggestion)
    }, 700)
  }

  private formatDuration = (durationSeconds: number) => {
    const tempTime = moment.duration(durationSeconds);
    let duration = tempTime.hours() < 10 ? '0' + tempTime.hours()+ ':' : tempTime.hours() + ':'
    duration += tempTime.minutes() < 10 ? '0' + tempTime.minutes()+ ':' : tempTime.minutes() + ':'
    duration += tempTime.seconds() < 10 ? '0' + tempTime.seconds() : tempTime.seconds()
    return duration
  }

  private renderSuggestion = (decoratedSuggestion: IDecoratedSuggestion, index: number) => {
    const { classes } = this.props
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
      <ListItem className={classes.listItem} dense={true} button={true} key={index}>
        {trackImage}
        <Grid className={classes.listItemContent} container={true} spacing={24}>
          <Grid item={true} md={4} container={true} direction={'row'} alignItems={'flex-end'}>
            <Grid container={true} direction={'column'} justify={'center'} md={4} item={true}>
              <ListItemText className={classes.trackBand} primary={track.album.artists[0].name} />
              <ListItemText className={classes.trackName} primary={track.name} />
            </Grid>
            <ListItemText primary={this.formatDuration(track.duration_ms)}/>
          </Grid>

          <Grid item={true} md={4}>
            {track.preview_url && (
              <audio
                src={track.preview_url}
                controls={true}
                className="EventSuggestions-audio"
                preload="none"
              />
            )}
          </Grid>
        </Grid>
        {userAccountIcon}
        <ListItemSecondaryAction>
          <Button
            className={classes.accept}
            variant="raised"
            onClick={this.handleSuggestionAccepted(decoratedSuggestion)}
          >
            ACCEPT
          </Button>
          <Button
            className={classes.reject}
            variant="raised"
            onClick={this.handleSuggestionAccepted(decoratedSuggestion)}
          >
            REJECT
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default decorate(EventMaybeSuggestions)