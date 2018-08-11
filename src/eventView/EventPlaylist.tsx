import Button from '@material-ui/core/Button/Button'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent/CardContent'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import Typography from '@material-ui/core/Typography/Typography'
import DoneAll from '@material-ui/icons/DoneAll'
import Undo from '@material-ui/icons/Undo'
import * as classNames from 'classnames'
import * as React from 'react'
import IEvent from '../event/IEvent'
import LoadingSpinner from '../loading/LoadingSpinner'
import '../preGame/PreGame.css'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import TrackList from '../track/TrackList'

interface IEventPlaylistProps {
  event: IEvent
  acceptedSuggestionsByTrackUri: Map<string, IDecoratedSuggestion>
  saving: boolean
  onSavePlaylist(): void
  onResetPlaylist(): void
}

export default class EventPlaylist extends React.PureComponent<
  IEventPlaylistProps
> {
  public render() {
    const { event, acceptedSuggestionsByTrackUri, saving } = this.props
    let acceptedTracks: ITrack[] = []
    const hasAcceptedTrack = acceptedSuggestionsByTrackUri.size > 0

    if (!event) {
      return <span />
    }

    if (hasAcceptedTrack) {
      acceptedTracks = Array.from(acceptedSuggestionsByTrackUri.values()).map(
        s => s.track
      )
    }

    return (
      <div className="PreGame-root">
        {saving && <LoadingSpinner />}
        {!saving && (
          <Grid container={true} spacing={24}>
            <Grid item={true} sm={8}>
              {hasAcceptedTrack && this.renderSaveButtons(hasAcceptedTrack)}

              {hasAcceptedTrack && (
                <List className="PreGame-acceptedTracks">
                  <TrackList tracks={acceptedTracks} />
                </List>
              )}

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
              <Card className="PreGame-card">
                {event.playlist &&
                  event.playlist.images &&
                  event.playlist.images.length > 0 && (
                    <CardMedia
                      className="PreGame-media"
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
                    {event.playlist &&
                      (event.playlist.followers || ({} as any)).total}{' '}
                    Followers
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

  private renderSaveButtons = (hasAcceptedTrack: boolean) => {
    return (
      <div className="PreGame-playlist-actions">
        <div className="PreGame-playlist-action">
          <Button
            variant="raised"
            color="primary"
            disabled={!hasAcceptedTrack}
            onClick={this.props.onSavePlaylist}
          >
            <DoneAll
              className={classNames('PreGame-leftIcon', 'PreGame-iconSmall')}
            />
            Save Changes{' '}
          </Button>
        </div>
        <div className="PreGame-playlist-action">
          <Button
            variant="raised"
            color="secondary"
            disabled={!hasAcceptedTrack}
            onClick={this.props.onResetPlaylist}
          >
            <Undo
              className={classNames('PreGame-leftIcon', 'PreGame-iconSmall')}
            />
            Reset{' '}
          </Button>
        </div>
      </div>
    )
  }
}
