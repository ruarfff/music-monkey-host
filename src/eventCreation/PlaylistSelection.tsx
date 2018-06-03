import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField/TextField'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import OpenInNew from '@material-ui/icons/OpenInNew'
import * as React from 'react'
import IPlaylist from '../playlist/IPlaylist'
import IUser from '../user/IUser'
import CreatePlaylistDialog from './CreatePlaylistDialog'
import ExistingPlaylistDialog from './ExistingPlaylistDialog'

const ITEM_HEIGHT = 48

const decorate = withStyles(({}) => ({
  root: {},
  menuIcon: {
    paddingTop: '1.5em'
  }
}))

interface IPlaylistSelectionProps {
  user: IUser
  value: string
  playlistInput: any
  closeCreatePlaylist(): any
  closeExistingPlaylist(): any
  createEventPlaylist(playlistDetails: any): any
  onPlaylistAdded(playlistUrl: string): any
  selectCreatePlaylist(): any
  selectExistingPlaylist(): any
}

export default decorate(
  class PlaylistSelection extends React.Component<
    IPlaylistSelectionProps & WithStyles<'root' | 'menuIcon'>
  > {
    public state = {
      anchorEl: undefined
    }

    public handleClick = (event: any) => {
      this.setState({ anchorEl: event.currentTarget })
    }

    public handleClose = () => {
      this.setState({ anchorEl: null })
    }

    public handlePlaylistSelected = (playlist: IPlaylist) => {
      this.props.onPlaylistAdded(playlist.external_urls.spotify)
      this.props.closeExistingPlaylist()
    }

    public handlePlaylistCreation = (playlistDetals: any) => {
      this.props.createEventPlaylist({
        ...playlistDetals,
        userId: this.props.user.spotifyId
      })
      this.props.closeCreatePlaylist()
    }

    public selectExistingSelected = () => {
      this.handleClose()
      this.props.selectExistingPlaylist()
    }

    public createPlaylistSelected = () => {
      this.handleClose()
      this.props.selectCreatePlaylist()
    }

    public render() {
      const { anchorEl } = this.state
      const {
        classes,
        value,
        playlistInput,
        closeExistingPlaylist,
        closeCreatePlaylist
      } = this.props
      return (
        <Grid container={true} spacing={8} alignItems="flex-end">
          <Grid item={true}>
            <TextField
              label="Spotify Playlist"
              required={true}
              disabled={true}
              fullWidth={true}
              margin="normal"
              value={value}
            />
          </Grid>
          <Grid item={true} className={classes.menuIcon}>
            {value && (
              <a href={value} target="_blank">
                <OpenInNew />
              </a>
            )}
            <IconButton
              aria-label="Action"
              aria-owns={anchorEl ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 300
                }
              }}
            >
              <MenuItem onClick={this.selectExistingSelected}>
                Select one of your Spotify playlists
              </MenuItem>
              <MenuItem onClick={this.createPlaylistSelected}>
                Create New Playlist
              </MenuItem>
            </Menu>
            <ExistingPlaylistDialog
              open={playlistInput.isSelectingExistingPlaylist}
              onClose={closeExistingPlaylist}
              onPlaylistSelected={this.handlePlaylistSelected}
            />
            <CreatePlaylistDialog
              open={playlistInput.isCreatingNewPlaylist}
              onClose={closeCreatePlaylist}
              onPlaylistCreation={this.handlePlaylistCreation}
            />
          </Grid>
        </Grid>
      )
    }
  }
)
