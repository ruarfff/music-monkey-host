import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField/TextField'
import OpenInNew from '@material-ui/icons/OpenInNew'
import * as React from 'react'
import IAction from '../IAction'
import IPlaylist from '../playlist/IPlaylist'
import IPlaylistDetails from '../playlist/IPlaylistDetails'
import IUser from '../user/IUser'
import CreatePlaylistDialog from './CreatePlaylistDialog'
import ExistingPlaylistDialog from './ExistingPlaylistDialog'

const decorate = withStyles(({}) => ({
  root: {},
  menuIcon: {
    paddingTop: '1.5em'
  },
  button: {
    color: '#F79022',
  },
  selectSpotify: {

  }
}))

interface IPlaylistSelectionProps {
  user: IUser
  value: string
  playlistInput: any
  playlists: IPlaylist[]
  closeCreatePlaylist(): any
  closeExistingPlaylist(): any
  createEventPlaylist(playlistDetails: any): any
  onPlaylistAdded(playlistUrl: string): any
  selectCreatePlaylist(): any
  selectExistingPlaylist(): any
  fetchPlaylists(user: IUser): IAction
}


class PlaylistSelection extends React.Component<
  IPlaylistSelectionProps & WithStyles<'root' | 'menuIcon' | 'button' | 'selectSpotify'>
> {
  public state = {
    selected: {
      label: '',
      value: '',
    },
  }

  public handleClose = () => {
    this.setState({ anchorEl: null })
  }

  public handlePlaylistSelected = (playlist: IPlaylist) => {
    this.props.onPlaylistAdded(playlist.external_urls.spotify)
    this.props.closeExistingPlaylist()
  }

  public handlePlaylistCreation = (playlistDetals: IPlaylistDetails) => {
    this.props.createEventPlaylist({
      ...playlistDetals,
      userId: this.props.user.spotifyId
    })
    this.props.closeCreatePlaylist()
  }

  public selectExistingSelected = () => {
    this.handleClose()
    this.props.selectExistingPlaylist()
    console.log(this.props.selectExistingPlaylist())
  }

  public createPlaylistSelected = () => {
    this.handleClose()
    this.props.selectCreatePlaylist()
  }

  public handleChange = (selected: any) => {
    this.setState({ selected });
    console.log(`Option selected:`, selected);
  }

  public render() {
    const {
      user,
      classes,
      value,
      playlists,
      playlistInput,
      closeExistingPlaylist,
      closeCreatePlaylist,
      fetchPlaylists,
    } = this.props

    return (
      <Grid container={true} spacing={8} alignItems="flex-end">
        <Grid item={true} md={3}>
          <TextField
            label="SELECT FROM SPOTIFY"
            required={true}
            disabled={true}
            fullWidth={true}
            margin="normal"
            value={value}
            onClick={this.selectExistingSelected}
            className={classes.selectSpotify}
          />
        </Grid>
        <Grid item={true} className={classes.menuIcon} md={3}>
          {value && (
            <a href={value} target="_blank">
              <OpenInNew fill="#F79022" />
            </a>
          )}
          <Button onClick={this.createPlaylistSelected}>
            <span className={classes.button}>
              CREATE NEW PLAYLIST
            </span>
          </Button>

          <ExistingPlaylistDialog
            user={user}
            playlists={playlists}
            open={playlistInput.isSelectingExistingPlaylist}
            onClose={closeExistingPlaylist}
            onPlaylistSelected={this.handlePlaylistSelected}
            fetchPlaylists={fetchPlaylists}
          />
          <CreatePlaylistDialog
            user={user}
            open={playlistInput.isCreatingNewPlaylist}
            onClose={closeCreatePlaylist}
            onPlaylistCreation={this.handlePlaylistCreation}
          />
        </Grid>
      </Grid>
    )
  }
}

export default decorate(PlaylistSelection)
