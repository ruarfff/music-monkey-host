import Button from '@material-ui/core/Button/Button'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent/CardContent'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { Theme } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import DoneAll from '@material-ui/icons/DoneAll'
import Undo from '@material-ui/icons/Undo'
import * as classNames from 'classnames'
import * as React from 'react'
import IAction from '../../Action'
import LoadingSpinner from '../../loading/LoadingSpinner'
import ITrack from '../../playlists/ITrack'
import IEvent from '../IEvent'

interface IPreGamePlaylistProps {
  event: IEvent
  acceptedTracks: ITrack[]
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
      <ListItemText primary={track.name} />
    </ListItem>
  )
}

const handleSaveClicked = (
  savePreGamePlaylist: any,
  event: IEvent,
  acceptedTracks: ITrack[]
) => () => {
  savePreGamePlaylist(event, acceptedTracks)
}

const renderSaveButtons = (
  classes: any,
  hasAcceptedTrack: boolean,
  savePreGamePlaylist: any,
  event: IEvent,
  acceptedTracks: ITrack[]
) => {
  return (
    <div>
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
        disabled={!hasAcceptedTrack}
        onClick={handleSaveClicked(savePreGamePlaylist, event, acceptedTracks)}
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
  ({ classes, event, acceptedTracks, savePreGamePlaylist, saving }) => {
    return (
      <div className={classes.root}>
        {saving && <LoadingSpinner />}
        {!saving && (
          <Grid container={true} spacing={24}>
            <Grid item={true} sm={8}>
              <Hidden smUp={true}>
                {renderSaveButtons(
                  classes,
                  acceptedTracks.length > 0,
                  savePreGamePlaylist,
                  event,
                  acceptedTracks
                )}
              </Hidden>

              {acceptedTracks &&
                acceptedTracks.length > 0 && (
                  <List className={classes.acceptedTracks}>
                    {acceptedTracks.map((track, i) =>
                      renderTrack(track, classes)
                    )}
                  </List>
                )}

              {event.playlist &&
                event.playlist.tracks.total > 0 && (
                  <List>
                    {event.playlist.tracks.items.map((item, i) =>
                      renderTrack(item.track, classes)
                    )}
                  </List>
                )}
              {event.playlist &&
                event.playlist.tracks.total < 1 && <p>No tracks yet</p>}
            </Grid>
            <Grid item={true} sm={4}>
              <Hidden smDown={true}>
                {renderSaveButtons(
                  classes,
                  acceptedTracks.length > 0,
                  savePreGamePlaylist,
                  event,
                  acceptedTracks
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
