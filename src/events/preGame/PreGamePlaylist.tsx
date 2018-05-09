import List, { ListItem, ListItemText } from 'material-ui/List'
import { Theme, withStyles } from 'material-ui/styles'
import * as React from 'react'
import IPlaylist from '../../playlists/IPlaylist'
import ITrack from '../../playlists/ITrack'

interface IPreGamePlaylistProps {
  playlist: IPlaylist
}

const decorate = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  trackImage: {
    maxWidth: 64,
    maxHeight: 64
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

const PreGamePlaylist = decorate<IPreGamePlaylistProps>(
  ({ classes, playlist }) => {
    return (
      <div className={classes.root}>
        {playlist.tracks.total > 0 && (
          <List>
            {playlist.tracks.items.map((item, i) =>
              renderTrack(item.track, classes)
            )}
          </List>
        )}
        {playlist.tracks.total < 1 && <p>No tracks yet</p>}
      </div>
    )
  }
)

export default PreGamePlaylist
