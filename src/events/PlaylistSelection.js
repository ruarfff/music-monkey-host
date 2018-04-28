import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grid from 'material-ui/Grid'
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

  selectExistingSelected = () => {
    this.handleClose()
    this.props.selectExistingPlaylistSelected()
  }

  render() {
    const { anchorEl } = this.state
    const { classes, value, onPlaylistAdded, playlistInput } = this.props
    return (
      <Grid container spacing={12}>
        <Grid item xs={10}>
          <TextField
            label="Spotify Playlist"
            placeholder="Enter Spotify Playlist URL"
            fullWidth
            margin="normal"
            disabled={!value && !playlistInput.linkInputEnabled}
            value={value}
            onChange={event => onPlaylistAdded(event.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            className={classes.menuIcon}
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
                width: 250
              }
            }}
          >
            <MenuItem onClick={this.selectExistingSelected}>
              Select one of your Spotify playlists
            </MenuItem>
            <MenuItem onClick={this.handleClose}>Create New Playlist</MenuItem>
          </Menu>
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
  selectExistingPlaylistSelected: PropTypes.func.isRequired
}

export default withStyles(styles)(PlaylistSelection)
