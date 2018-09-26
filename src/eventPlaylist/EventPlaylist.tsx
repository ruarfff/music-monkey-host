import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import DoneAll from '@material-ui/icons/DoneAll'
import Undo from '@material-ui/icons/Undo'
import * as classNames from 'classnames'
import * as React from 'react'
import { DropResult } from 'react-beautiful-dnd'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import LoadingSpinner from '../loading/LoadingSpinner'
import IPlaylist from '../playlist/IPlaylist'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import TrackList from '../track/TrackList'
import ITrackVoteStatus from '../vote/ITrackVoteStatus'
import './EventPlaylist.css'

interface IEventPlaylistProps {
  event: IEvent
  playlist: IPlaylist
  stagedSuggestions: IDecoratedSuggestion[]
  saving: boolean
  votes: Map<string, ITrackVoteStatus>
  saveEventPlaylist(
    eventId: string,
    playlist: IPlaylist,
    suggestions: Map<string, IDecoratedSuggestion>
  ): IAction
  resetStagedSuggestions(): IAction
  onPlaylistDragDrop(
    playlist: IPlaylist,
    fromIndex: number,
    toIndex: number
  ): IAction
  sortPlaylistByVotesDescending(
    playlist: IPlaylist,
    votes: Map<string, ITrackVoteStatus>
  ): IAction
}

export default class EventPlaylist extends React.Component<
  IEventPlaylistProps
> {
  public state = {
    anchorEl: null
  }

  public handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = (type: string) => () => {
    if (type === 'vote') {
      this.props.sortPlaylistByVotesDescending(
        this.props.playlist,
        this.props.votes
      )
    }
    this.setState({ anchorEl: null })
  }

  public render() {
    const { playlist, stagedSuggestions, saving, votes } = this.props
    let stagedTracks: ITrack[] = []

    if (!playlist) {
      return <span />
    }

    if (stagedSuggestions && stagedSuggestions.length > 0) {
      stagedTracks = stagedSuggestions.map(s => s.track)
    }

    const hasStagedTrack = stagedTracks.length > 0
    const { anchorEl } = this.state
    return (
      <div className="EventPlaylist-root">
        {saving && <LoadingSpinner />}
        {!saving && (
          <Grid container={true} spacing={8}>
            <Grid item={true} sm={12} container={true} justify={'space-between'} alignItems={'center'}>
              <Typography>
                Tracks
              </Typography>

              {hasStagedTrack && this.renderSaveButtons(hasStagedTrack)}

              <div>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  Sort
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose('root')}
                >
                  <MenuItem onClick={this.handleClose('vote')}>
                    By Vote
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
            <Grid item={true} sm={12}>
              {hasStagedTrack && (
                <List className="EventPlaylist-stagedTracks">
                  <TrackList tracks={stagedTracks} />
                </List>
              )}

              {playlist &&
                playlist.tracks.total > 0 && (
                  <List>
                    <TrackList
                      tracks={playlist.tracks.items.map(item => item.track)}
                      withVoting={true}
                      votes={votes}
                      onDragEnd={this.handlePlaylistDragDrop}
                    />
                  </List>
                )}
              {playlist && playlist.tracks.total < 1 && <p>No tracks yet</p>}
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
    const { event, playlist, stagedSuggestions, saveEventPlaylist } = this.props
    if (stagedSuggestions && stagedSuggestions.length > 0) {
      const suggestionMap = new Map()
      stagedSuggestions.forEach((ds: IDecoratedSuggestion) => {
        suggestionMap.set(ds.track.uri, ds)
      })
      saveEventPlaylist(event.eventId || '', playlist, suggestionMap)
    }
  }

  private handlePlaylistDragDrop = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    this.props.onPlaylistDragDrop(
      this.props.playlist,
      result.source.index,
      result.destination.index
    )
  }
}
