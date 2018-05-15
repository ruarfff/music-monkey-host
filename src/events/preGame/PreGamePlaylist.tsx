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
import IPlaylist from '../../playlists/IPlaylist'
import ITrack from '../../playlists/ITrack'

interface IPreGamePlaylistProps {
  playlist: IPlaylist
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

const renderSaveButtons = (classes: any) => {
  return (
    <div>
      <Button
        className={classes.button}
        variant="raised"
        color="primary"
        disabled={true}
      >
        <DoneAll className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save Changes{' '}
      </Button>
      <Button
        className={classes.button}
        variant="raised"
        color="secondary"
        disabled={true}
      >
        <Undo className={classNames(classes.leftIcon, classes.iconSmall)} />
        Reset{' '}
      </Button>
    </div>
  )
}

const PreGamePlaylist = decorate<IPreGamePlaylistProps>(
  ({ classes, playlist }) => {
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24}>
          <Grid item={true} sm={8}>
            <Hidden smUp={true}>{renderSaveButtons(classes)}</Hidden>
            {playlist.tracks.total > 0 && (
              <List>
                {playlist.tracks.items.map((item, i) =>
                  renderTrack(item.track, classes)
                )}
              </List>
            )}
            {playlist.tracks.total < 1 && <p>No tracks yet</p>}
          </Grid>
          <Grid item={true} sm={4}>
            <Hidden smDown={true}>{renderSaveButtons(classes)}</Hidden>
            <Card className={classes.card}>
              {playlist.images &&
                playlist.images.length > 0 && (
                  <CardMedia
                    className={classes.media}
                    image={playlist.images[0].url}
                    title={playlist.name}
                  />
                )}
              <CardContent>
                <Typography
                  gutterBottom={true}
                  variant="headline"
                  component="h2"
                >
                  {playlist.name}
                </Typography>
                <Typography variant="subheading">
                  {playlist.followers.total} Followers
                </Typography>
                <Typography component="p">
                  <a href={playlist.external_urls.spotify} target="_blank">
                    Open in Spotify
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
)

export default PreGamePlaylist
