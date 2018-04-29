import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'

class PlaylistsSimpleList extends Component {
  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    const { onPlaylistSelected } = this.props
    let playlists = []
    let playlistView = <p>You do not have any playlists yet</p>

    if (this.props.playlists.data) {
      playlists = this.props.playlists.data.items
      if (playlists.length > 0) {
        playlistView = playlists.map((playlist, i) => (
          <List key={i}>
            <ListItem button onClick={() => onPlaylistSelected(playlist)}>
              <ListItemAvatar>
                <Avatar
                  alt={playlist.name}
                  src={
                    playlist.images.length > 0
                      ? playlist.images[0].url
                      : '/img/partycover-sm.png'
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={playlist.name}
                secondary={`${playlist.tracks.total} tracks`}
              />
            </ListItem>
          </List>
        ))
      }
    }

    return <div className="Playlist-list">{playlistView}</div>
  }
}

PlaylistsSimpleList.propTypes = {
  playlists: PropTypes.object.isRequired,
  fetchPlaylists: PropTypes.func.isRequired,
  onPlaylistSelected: PropTypes.func.isRequired
}

export default PlaylistsSimpleList
