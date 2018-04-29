import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grid from 'material-ui/Grid'
import ExistingPlaylistDialog from './ExistingPlaylistDialog'
import CreatePlaylistDialog from './CreatePlaylistDialog'
import './Events.css'

const ITEM_HEIGHT = 48

const styles = {
  menuIcon: {
    paddingTop: '1.5em'
  }
}

class PlaylistSelection extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handlePlaylistSelected = playlist => {
    this.props.onPlaylistAdded(playlist.external_urls.spotify)
    this.props.closeExistingPlaylist()
  }

  selectExistingSelected = () => {
    this.handleClose()
    this.props.selectExistingPlaylist()
  }

  createPlaylistSelected = () => {
    this.handleClose()
    this.props.selectCreatePlaylist()
  }

  render() {
    const { anchorEl } = this.state
    const {
      classes,
      value,      
      playlistInput,
      closeExistingPlaylist,
      closeCreatePlaylist
    } = this.props
    return (
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <TextField
            label="Spotify Playlist"
            disabled
            fullWidth
            margin="normal"
            value={value}
          />
        </Grid>
        <Grid item className={classes.menuIcon}>
          <IconButton
            aria-label="Action"
            aria-owns={anchorEl ? 'long-menu' : null}
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
                width: 280
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
          />
        </Grid>
      </Grid>
    )
  }
}

PlaylistSelection.propTypes = {
  value: PropTypes.string.isRequired,
  onPlaylistAdded: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  playlistInput: PropTypes.object.isRequired,
  selectExistingPlaylist: PropTypes.func.isRequired,
  closeExistingPlaylist: PropTypes.func.isRequired,
  selectCreatePlaylist: PropTypes.func.isRequired,
  closeCreatePlaylist: PropTypes.func.isRequired
}

export default withStyles(styles)(PlaylistSelection)
