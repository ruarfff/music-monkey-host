import { Typography, WithStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton/IconButton'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { Theme } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DoneAll from '@material-ui/icons/DoneAll'
import * as classNames from 'classnames'
import * as React from 'react'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import IAcceptedSuggestionTrack from './IAcceptedSuggestionTrack'

interface IUserSuggestionsViewProps {
  suggestions: IDecoratedSuggestion[]
  preGameTabIndex: number
  acceptedTracks: IAcceptedSuggestionTrack[]
  acceptAllSuggestedTracks(suggestion: IDecoratedSuggestion): IAction
  acceptOneSuggestedTrack(
    suggestion: IDecoratedSuggestion,
    track: ITrack
  ): IAction
  deleteOneSuggestedTrack(
    suggestion: IDecoratedSuggestion,
    track: ITrack
  ): IAction
}

const decorate = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
  },
  trackImage: {
    maxWidth: 64,
    maxHeight: 64
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
}))

type PropsWithStyles = IUserSuggestionsViewProps & WithStyles<'root'>

class UserSuggestionsView extends React.Component<PropsWithStyles, {}> {
  public render() {
    const { classes, suggestions, preGameTabIndex } = this.props

    if (
      preGameTabIndex === 0 ||
      suggestions.length < 1 ||
      suggestions.length < preGameTabIndex - 1
    ) {
      return (
        <Typography align="center" variant="subheading">
          Currently no Suggestions
        </Typography>
      )
    }

    const currentUserSuggestion = suggestions[preGameTabIndex - 1]

    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24}>
          {currentUserSuggestion.tracks.length > 0 && (
            <Grid item={true} sm={12}>
              {this.renderSaveButtons()}
            </Grid>
          )}
          <Grid item={true} sm={12}>
            {this.renderTrackList()}
          </Grid>
        </Grid>
      </div>
    )
  }

  private renderTrackList = () => {
    const { suggestions, preGameTabIndex, acceptedTracks } = this.props
    const currentUserSuggestion = suggestions[preGameTabIndex - 1]
    if (
      preGameTabIndex < 1 ||
      !currentUserSuggestion.tracks ||
      currentUserSuggestion.tracks.length < 1
    ) {
      return (
        <Typography align="center" variant="subheading">
          No tracks to accept
        </Typography>
      )
    }
    const tracks = currentUserSuggestion.tracks.filter(
      (track: ITrack) =>
        !acceptedTracks.find(
          (acceptedTrack: IAcceptedSuggestionTrack) =>
            acceptedTrack.track.uri === track.uri
        )
    )
    return <List>{tracks.map((track, i) => this.renderTrack(track))}</List>
  }

  private handleTrackAccepted = (track: ITrack) => () =>
    this.props.acceptOneSuggestedTrack(
      this.props.suggestions[this.props.preGameTabIndex - 1],
      track
    )

  private renderTrack = (track: ITrack) => {
    const classes: any = this.props.classes
    let trackImage = <span />
    if (track.album && track.album.images && track.album.images.length > 0) {
      trackImage = (
        <img
          className={classes.trackImage}
          src={track.album.images[track.album.images.length - 1].url}
          alt={track.name}
        />
      )
    }

    return (
      <ListItem key={track.uri} dense={true} button={true}>
        {trackImage}
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Accept"
            onClick={this.handleTrackAccepted(track)}
          >
            <CheckCircleIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemText primary={track.name} />
      </ListItem>
    )
  }
  private handleAcceptAllClicked = () => () => {
    this.props.acceptAllSuggestedTracks(
      this.props.suggestions[this.props.preGameTabIndex - 1]
    )
  }

  private renderSaveButtons = () => {
    const classes: any = this.props.classes

    return (
      <div>
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
          onClick={this.handleAcceptAllClicked()}
        >
          <DoneAll
            className={classNames(classes.leftIcon, classes.iconSmall)}
          />
          Accept All{' '}
        </Button>
      </div>
    )
  }
}

export default decorate(UserSuggestionsView as any)
