import Button from '@material-ui/core/Button/Button'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent/CardContent'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import List from '@material-ui/core/List/List'
import { Theme } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import DoneAll from '@material-ui/icons/DoneAll'
import Undo from '@material-ui/icons/Undo'
import * as classNames from 'classnames'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import TrackList from '../track/TrackList'
import IAcceptedSuggestionTrack from './IAcceptedSuggestionTrack'

interface IPreGamePlaylistProps {
  event: IEvent
  acceptedSuggestionTracks: IAcceptedSuggestionTrack[]
  saving: boolean
  acceptAllSuggestedTracks(): IAction
  savePreGamePlaylist(): IAction
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
  },
  acceptedTracks: {
    border: '2px solid #dadada',
    borderRadius: 'border-radius: 7px'
  }
}))

const handleSaveClicked = (
  savePreGamePlaylist: any,
  event: IEvent,
  acceptedSuggestionTracks: IAcceptedSuggestionTrack[]
) => () => {
  savePreGamePlaylist(event, acceptedSuggestionTracks.map(acc => acc.track))
}

const renderSaveButtons = (
  classes: any,
  hasAcceptedTrack: boolean,
  savePreGamePlaylist: any,
  event: IEvent,
  acceptedSuggestionTrack: IAcceptedSuggestionTrack[]
) => {
  return (
    <div>
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
        disabled={!hasAcceptedTrack}
        onClick={handleSaveClicked(
          savePreGamePlaylist,
          event,
          acceptedSuggestionTrack
        )}
      >
        <DoneAll className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save Changes{' '}
      </Button>
      <Button
        className={classes.button}
        variant="raised"
        color="secondary"
        disabled={!hasAcceptedTrack}
      >
        <Undo className={classNames(classes.leftIcon, classes.iconSmall)} />
        Reset{' '}
      </Button>
    </div>
  )
}

const PreGamePlaylist = decorate<IPreGamePlaylistProps>(
  ({
    classes,
    event,
    acceptedSuggestionTracks,
    savePreGamePlaylist,
    saving
  }) => {
    return (
      <div className={classes.root}>
        {saving && <LoadingSpinner />}
        {!saving && (
          <Grid container={true} spacing={24}>
            <Grid item={true} sm={8}>
              <Hidden smUp={true}>
                {renderSaveButtons(
                  classes,
                  acceptedSuggestionTracks.length > 0,
                  savePreGamePlaylist,
                  event,
                  acceptedSuggestionTracks
                )}
              </Hidden>

              <List>
                <TrackList
                  tracks={acceptedSuggestionTracks.map(acc => acc.track)}
                />
              </List>

              {event.playlist &&
                event.playlist.tracks.total > 0 && (
                  <List>
                    <TrackList
                      tracks={event.playlist.tracks.items.map(
                        item => item.track
                      )}
                    />
                  </List>
                )}
              {event.playlist &&
                event.playlist.tracks.total < 1 && <p>No tracks yet</p>}
            </Grid>
            <Grid item={true} sm={4}>
              <Hidden smDown={true}>
                {renderSaveButtons(
                  classes,
                  acceptedSuggestionTracks.length > 0,
                  savePreGamePlaylist,
                  event,
                  acceptedSuggestionTracks
                )}
              </Hidden>
              <Card className={classes.card}>
                {event.playlist &&
                  event.playlist.images &&
                  event.playlist.images.length > 0 && (
                    <CardMedia
                      className={classes.media}
                      image={event.playlist.images[0].url}
                      title={event.playlist.name}
                    />
                  )}
                <CardContent>
                  <Typography
                    gutterBottom={true}
                    variant="headline"
                    component="h2"
                  >
                    {event.playlist && event.playlist.name}
                  </Typography>
                  <Typography variant="subheading">
                    {event.playlist && event.playlist.followers.total} Followers
                  </Typography>
                  <Typography component="p">
                    {event.playlist && (
                      <a
                        href={event.playlist.external_urls.spotify}
                        target="_blank"
                      >
                        Open in Spotify
                      </a>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
)

export default PreGamePlaylist
