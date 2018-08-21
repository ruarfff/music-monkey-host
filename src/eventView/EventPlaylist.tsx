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
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import '../preGame/PreGame.css'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import TrackList from '../track/TrackList'

import './EventPlaylist.css'

interface IEventPlaylistProps {
  event: IEvent
  stagedSuggestions: IDecoratedSuggestion[]
  saving: boolean
  saveEventPlaylist(
    event: IEvent,
    suggestions: Map<string, IDecoratedSuggestion>
  ): IAction
  resetStagedSuggestions(): IAction
}

export default class EventPlaylist extends React.PureComponent<
  IEventPlaylistProps
> {
  public render() {
    const { event, stagedSuggestions, saving } = this.props
    let stagedTracks: ITrack[] = []

    if (stagedSuggestions && stagedSuggestions.length > 0) {
      stagedTracks = stagedSuggestions.map(s => s.track)
    }

    const hasStagedTrack = stagedTracks.length > 0

    if (!event) {
      return <span />
    }

    return (
      <div className="EventPlaylist-root">
        {saving && <LoadingSpinner />}
        {!saving && (
          <Grid container={true} spacing={24}>
            <Grid item={true} sm={8}>
              {hasStagedTrack && this.renderSaveButtons(hasStagedTrack)}

              {hasStagedTrack && (
                <List className="EventPlaylist-stagedTracks">
                  <TrackList tracks={stagedTracks} />
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
              <Card className="EventPlaylist-card">
                {event.playlist &&
                  event.playlist.images &&
                  event.playlist.images.length > 0 && (
                    <CardMedia
                      className="EventPlaylist-media"
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

  private renderSaveButtons = (hasStagedTrack: boolean) => {
    return (
      <div className="EventPlaylist-playlist-actions">
        <div className="EventPlaylist-playlist-action">
          <Button
            variant="raised"
            color="primary"
            disabled={!hasStagedTrack}
            onClick={this.handleSavePlaylist}
          >
            <DoneAll
              className={classNames(
                'EventPlaylist-leftIcon',
                'EventPlaylist-iconSmall'
              )}
            />
            Save Changes{' '}
          </Button>
        </div>
        <div className="EventPlaylist-playlist-action">
          <Button
            variant="raised"
            color="secondary"
            disabled={!hasStagedTrack}
            onClick={this.props.resetStagedSuggestions}
          >
            <Undo
              className={classNames(
                'EventPlaylist-leftIcon',
                'EventPlaylist-iconSmall'
              )}
            />
            Reset{' '}
          </Button>
        </div>
      </div>
    )
  }

  private handleSavePlaylist = () => {
    const { event, stagedSuggestions, saveEventPlaylist } = this.props
    if (stagedSuggestions && stagedSuggestions.length > 0) {
      const suggestionMap = new Map()
      stagedSuggestions.forEach((ds: IDecoratedSuggestion) => {
        suggestionMap.set(ds.track.uri, ds)
      })
      saveEventPlaylist(event, suggestionMap)
    }
  }
}
