import { ListItemIcon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Paper from '@material-ui/core/Paper'
import { WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import * as moment from 'moment'
import * as React from 'react'
import club from '../assets/club.png'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ISuggestion from '../suggestion/ISuggestion'
import ITrack from '../track/ITrack'
import './EventSuggestions.css'

const decorate = withStyles(() => ({
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
  },
  img: {
    width: '150px',
    height: '100px',
    borderRadius: '5px 5px 0 0'
  }
}))

interface IEventRejectedSuggestionsProps {
  suggestions: IDecoratedSuggestion[]
  stageSuggestion(suggestion: ISuggestion): IAction
}

class EventCohostPlaylist extends React.PureComponent<
  IEventRejectedSuggestionsProps & WithStyles
  > {

  public state = {
    tracksBeingRemoved: {}
  }

  public render() {
    const { suggestions, classes } = this.props
    const filteredSuggestions = suggestions.filter(suggest => !suggest.suggestion.accepted)
    if (!filteredSuggestions || filteredSuggestions.length < 1) {
      return (
        <Typography align="center" variant="subheading">
          Currently no Rejected Suggestions
        </Typography>
      )
    }
    return (
      <div>
        <Grid container={true} spacing={24}>
          <Grid item={true} md={8}>
            <List>
              {filteredSuggestions.map((decoratedSuggestion, i) =>
                this.renderSuggestion(decoratedSuggestion, i)
              )}
            </List>
          </Grid>
          <Grid item={true} md={4}>
            <input type="search"/>
            <Typography>
              Playlists
            </Typography>
            <Grid container={true} spacing={24}>
              <Grid item={true} className={classes.playlistCard}>
                <Paper >
                  <img className={classes.img} src={club}/>
                  <Typography>
                    test name
                  </Typography>
                  <Button  color={'primary'}>
                    view
                  </Button>
                </Paper>
                <Button className={classes.accept}>
                  add
                </Button>
              </Grid>
            </Grid>
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

  private renderSuggestion = (decoratedSuggestion: IDecoratedSuggestion, i: number) => {
    const { classes } = this.props
    const { track } = decoratedSuggestion
    let trackImage = <span />
    if (track.album && track.album.images && track.album.images.length > 0) {
      trackImage = (
        <ListItemIcon >
          <img
            className="EventSuggestions-trackImage"
            src={track.album.images[track.album.images.length - 1].url}
            alt={track.name}
          />
        </ListItemIcon>
      )
    }

    return (
      <React.Fragment key={i}>
          <ListItem className={classes.listItem} dense={true} button={true} key={track.uri}>
            {trackImage}
            <Grid className={classes.listItemContent} container={true} spacing={24}>
              <Grid item={true} md={12} container={true} direction={'row'} alignItems={'flex-end'}>
                <Grid container={true} direction={'column'} justify={'center'} md={6} item={true}>
                  <ListItemText className={classes.trackBand} primary={track.album.artists[0].name} />
                  <ListItemText className={classes.trackName} primary={track.name} />
                </Grid>
                <ListItemText primary={this.formatDuration(track.duration_ms)}/>
              </Grid>
            </Grid>
            <ListItemSecondaryAction>
              <Button
                className={classes.accept}
                variant="raised"
                onClick={this.handleSuggestionAccepted(decoratedSuggestion)}
              >
                ADD
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
      </React.Fragment>
    )
  }
}

export default decorate(EventCohostPlaylist)