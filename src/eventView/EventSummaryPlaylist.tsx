import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper/Paper'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import IPlaylist from '../playlist/IPlaylist'
import './EventSummaryPlaylist.css'

interface IEventSummaryPlaylistProps {
  playlist: IPlaylist
}
export default class EventSummaryPlaylist extends React.PureComponent<
  IEventSummaryPlaylistProps
> {
  public render() {
    const { playlist } = this.props
    if (!playlist) {
      return <span />
    }
    const numTracks = playlist.tracks.items.length
    const openUrl = playlist.external_urls.spotify
    const durationSeconds =
      playlist.tracks.items
        .map(item => item.track.duration_ms)
        .reduce((acc, dur) => acc + dur) / 1000
    const formattedDuration = this.formatDuration(durationSeconds)
    const image =
      playlist.images && playlist.images.length ? playlist.images[0].url : null
    return (
      <Paper className="EventSummaryPlaylist-root">
        <Grid container={true} spacing={16}>
          <Grid item={true} xs={12}>
            <Typography gutterBottom={true} variant="subheading">
              Playlist{' '}
              <a href={openUrl} target="_blank">
                Open in Spotify
              </a>
            </Typography>
          </Grid>
          <Grid item={true} xs={12} container={true}>
            <Grid item={true} xs={6}>
              <Typography gutterBottom={true}>{playlist.name}</Typography>
              <Typography color="textSecondary">{numTracks} Tracks</Typography>
              <Typography color="textSecondary">{formattedDuration}</Typography>
            </Grid>

            <Grid item={true} xs={6}>
              {image && (
                <ButtonBase className="EventSummaryPlaylist-image">
                  <img alt="complex" src={image} />
                </ButtonBase>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }

  private formatDuration = (durationSeconds: number) => {
    const hours = Math.floor(durationSeconds / 3600)
    const minutes = Math.floor((durationSeconds - hours * 3600) / 60)

    return hours + 'h ' + minutes + 'm '
  }
}
