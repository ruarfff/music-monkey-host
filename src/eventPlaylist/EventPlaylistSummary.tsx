import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IPlaylist from '../playlist/IPlaylist'
import './EventPlaylistSummary.css'

interface IEventPlaylistSummaryProps {
  event: IEvent
  playlist: IPlaylist
}

class EventPlaylistSummary extends React.PureComponent<
  IEventPlaylistSummaryProps
> {
  public render() {
    const playlist: IPlaylist = this.props.playlist || ({} as IPlaylist)
    const event: IEvent = this.props.event || ({} as IEvent)

    return (
      <Grid container={true} spacing={24}>
        <Grid item={true} sm={12}>
          <Card className="EventPlaylistSummary-card">
            <div className="EventPlaylistSummary-container">
              {playlist.images &&
                playlist.images.length > 0 && (
                  <div className="EventPlaylistSummary-item">
                    <CardMedia
                      className="EventPlaylistSummary-cover"
                      image={playlist.images[0].url}
                      title={playlist.name}
                    />
                  </div>
                )}
              <div className="EventPlaylistSummary-item">
                <CardContent className="EventPlaylistSummary-content">
                  <Typography variant="headline">{playlist.name}</Typography>
                  <Typography variant="subheading" color="textSecondary">
                    {playlist.external_urls && (
                      <a href={playlist.external_urls.spotify} target="_blank">
                        Open in Spotify
                      </a>
                    )}
                  </Typography>
                </CardContent>
              </div>
              <div className="EventPlaylistSummary-controls EventPlaylistSummary-item">
                <IconButton aria-label="Previous">
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="Play/pause">
                  <PlayArrowIcon className="EventPlaylistSummary-playIcon" />
                </IconButton>
                <IconButton aria-label="Next">
                  <SkipNextIcon />
                </IconButton>
              </div>
              <div className="EventPlaylistSummary-status EventPlaylistSummary-item">
                <Chip label="Pre-Game" color="primary" />
              </div>
              <div className="EventPlaylistSummary-time EventPlaylistSummary-item">
                <Typography component="p">
                  {event.startDateTime &&
                    'Live at: ' + event.startDateTime.format('LLLL')}
                </Typography>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default EventPlaylistSummary
