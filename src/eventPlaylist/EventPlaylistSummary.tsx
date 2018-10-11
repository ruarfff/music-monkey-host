// import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton'
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
        <Grid item={true} sm={12} className="EventPlaylistSummary-card">
          <div className="EventPlaylistSummary-container">
            <div className="EventPlaylistSummary-item">
              <div>
                <span className="EventPlaylist-name">
                  {playlist.name}
                </span>

                      <span className="EventPlaylist-spotifyLink">
                  {playlist.external_urls && (
                    <a href={playlist.external_urls.spotify} target="_blank">
                      Open in Spotify
                    </a>
                  )}
                </span>
              </div>
              <div>
                {/*<span className="EventPlaylist-cohost">Pass the Aux:</span>*/}
                {/*<Button*/}
                  {/*color={'secondary'}*/}
                  {/*variant={'raised'}*/}
                {/*>*/}
                  {/*CHOOSE CO-HOST*/}
                {/*</Button>*/}
              </div>
            </div>

            <div className="EventPlaylistSummary-item">
              <div>
                <span className="EventPlaylistSummary-status">Status:</span>
                <span className="EventPlaylistSummary-status">Pre-Game</span>
              </div>
              <div>
                <span className="EventPlaylistSummary-time">
                Live at:
              </span>
                <span className="EventPlaylistSummary-time">
                {event.startDateTime && event.startDateTime.format('MMM Do, h:mm')}
              </span>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item={true} md={12}>
          <div className="EventPlaylistSummary-controls">
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
        </Grid>
      </Grid>
    )
  }
}

export default EventPlaylistSummary
