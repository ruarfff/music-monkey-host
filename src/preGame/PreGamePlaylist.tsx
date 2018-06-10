import Button from '@material-ui/core/Button/Button'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent/CardContent'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import Grid from '@material-ui/core/Grid/Grid'
import Hidden from '@material-ui/core/Hidden/Hidden'
import List from '@material-ui/core/List/List'
import Typography from '@material-ui/core/Typography/Typography'
import DoneAll from '@material-ui/icons/DoneAll'
import Undo from '@material-ui/icons/Undo'
import * as classNames from 'classnames'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import TrackList from '../track/TrackList'
import './PreGame.css'

interface IPreGamePlaylistProps {
  event: IEvent
  acceptedSuggestions: IDecoratedSuggestion[]
  saving: boolean
  hasAcceptedTrack: boolean
  acceptAllSuggestedTracks(): IAction
  savePreGamePlaylist(
    event: IEvent,
    suggestions: IDecoratedSuggestion[]
  ): IAction
}

export default class PreGamePlaylist extends React.PureComponent<
  IPreGamePlaylistProps
> {
  public render() {
    const { event, acceptedSuggestions, saving, hasAcceptedTrack } = this.props

    return (
      <div className="PreGame-root">
        {saving && <LoadingSpinner />}
        {!saving && (
          <Grid container={true} spacing={24}>
            <Grid item={true} sm={8}>
              <Hidden smUp={true}>{this.renderSaveButtons()}</Hidden>

              {hasAcceptedTrack && (
                <List className="PreGame-acceptedTracks">
                  <TrackList
                    tracks={acceptedSuggestions.map(acc => acc.track)}
                  />
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
              <Hidden smDown={true}>{this.renderSaveButtons()}</Hidden>
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

  private handleSaveClicked = () => {
    const { savePreGamePlaylist, event, acceptedSuggestions } = this.props
    savePreGamePlaylist(event, acceptedSuggestions)
  }

  private renderSaveButtons = () => {
    const { hasAcceptedTrack } = this.props
    return (
      <div>
        <Button
          className="PreGame-.button"
          variant="raised"
          color="primary"
          disabled={!hasAcceptedTrack}
          onClick={this.handleSaveClicked}
        >
          <DoneAll
            className={classNames(
              'PreGame-leftIcon',
              'PreGame-iconSmall'
            )}
          />
          Save Changes{' '}
        </Button>
        <Button
          className="PreGame-button"
          variant="raised"
          color="secondary"
          disabled={!hasAcceptedTrack}
        >
          <Undo
            className={classNames(
              'PreGame-leftIcon',
              'PreGame-iconSmall'
            )}
          />
          Reset{' '}
        </Button>
      </div>
    )
  }
}
