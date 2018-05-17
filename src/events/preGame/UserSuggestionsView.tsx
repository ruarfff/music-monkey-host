import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton/IconButton'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { Theme } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import CommentIcon from '@material-ui/icons/CheckCircle'
import DoneAll from '@material-ui/icons/DoneAll'
import * as classNames from 'classnames'
import * as React from 'react'
import IAction from '../../Action'
import ITrack from '../../playlists/ITrack'
import IPregameSuggestion from './IPregameSuggestion'

interface IUserSuggestionsViewProps {
  suggestions: IPregameSuggestion[]
  preGameTabIndex: number
  acceptAllSuggestedTracks(suggestion: IPregameSuggestion): IAction
  acceptOneSuggestedTrack(
    suggestion: IPregameSuggestion,
    track: ITrack
  ): IAction
  deleteOneSuggestedTrack(
    suggestion: IPregameSuggestion,
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

const renderTrackList = (
  suggestions: IPregameSuggestion[],
  tabIndex: number,
  classes: any
) => {
  if (
    tabIndex < 1 ||
    suggestions.length < tabIndex ||
    !suggestions[tabIndex - 1].tracks ||
    suggestions[tabIndex - 1].tracks.length < 1
  ) {
    return (
      <Typography align="center" variant="subheading">
        No tracks to accept
      </Typography>
    )
  }
  const tracks = suggestions[tabIndex - 1].tracks
  return <List>{tracks.map((track, i) => renderTrack(track, classes))}</List>
}

const renderTrack = (track: ITrack, classes: any) => {
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
        <IconButton aria-label="Comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemText primary={track.name} />
    </ListItem>
  )
}

const handleAcceptAllClicked = (props: IUserSuggestionsViewProps) => () => {
  props.acceptAllSuggestedTracks(props.suggestions[props.preGameTabIndex - 1])
}

const renderSaveButtons = (classes: any, props: IUserSuggestionsViewProps) => {
  return (
    <div>
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
        onClick={handleAcceptAllClicked(props)}
      >
        <DoneAll className={classNames(classes.leftIcon, classes.iconSmall)} />
        Accept All{' '}
      </Button>
    </div>
  )
}

const UserSuggestionsView = decorate<IUserSuggestionsViewProps>(
  ({
    classes,
    suggestions,
    preGameTabIndex,
    acceptAllSuggestedTracks,
    acceptOneSuggestedTrack,
    deleteOneSuggestedTrack
  }) => {
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24}>
          {suggestions &&
            suggestions[preGameTabIndex - 1] &&
            suggestions[preGameTabIndex - 1].tracks.length > 0 && (
              <Grid item={true} sm={12}>
                {renderSaveButtons(classes, {
                  acceptAllSuggestedTracks,
                  preGameTabIndex,
                  suggestions
                } as IUserSuggestionsViewProps)}
              </Grid>
            )}
          <Grid item={true} sm={12}>
            {renderTrackList(suggestions, preGameTabIndex, classes)}
          </Grid>
        </Grid>
      </div>
    )
  }
)

export default UserSuggestionsView
