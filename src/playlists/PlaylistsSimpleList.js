import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar/Avatar'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'

class PlaylistsSimpleList extends Component {
  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    const { onPlaylistSelected, user, playlists } = this.props
    let playlistView = <p>You do not have any playlists yet</p>

    if (playlists.data) {
      if (playlists.data.items.length > 0) {
        playlistView = (
          <List>
            {playlists.data.items
              .filter(playlist => playlist.owner.id === user.spotifyId)
              .map((playlist, i) => (
                <ListItem
                  key={i}
                  button
                  onClick={() => onPlaylistSelected(playlist)}
                >
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
              ))}
          </List>
        )
      }
    }

    return <div className="Playlist-list">{playlistView}</div>
  }
}

PlaylistsSimpleList.propTypes = {
  fetchPlaylists: PropTypes.func.isRequired,
  onPlaylistSelected: PropTypes.func.isRequired,
  playlists: PropTypes.object.isRequired
}

export default PlaylistsSimpleList
