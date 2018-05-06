import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'

import './Playlist.css'

const style = {
  display: 'inline-block',
  height: 200,
  margin: 20,
  textAlign: 'center',
  width: 200
}

class Playlists extends Component {
  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    let playlists = []
    let playlistView = <p>No Playlists yet</p>

    if (this.props.playlists.data) {
      playlists = this.props.playlists.data.items
      playlistView = playlists.map((playlist, i) => (
        <Paper style={style} elevation={4} key={i}>
          <div className="Playist-card">
            <div>
              <a href={playlist.external_urls.spotify} target="_blank">
                <img
                  src={
                    playlist.images.length > 0
                      ? playlist.images[0].url
                      : '/img/partycover-sm.png'
                  }
                  alt="playlist"
                  className="Playist-img hvrPulseGrow"
                />
              </a>
            </div>
            <div className="Playlist-info">
              <b>{playlist.name}</b> - {playlist.tracks.total} tracks
            </div>
          </div>
        </Paper>
      ))
    }

    return <div className="Playlist-list">{playlistView}</div>
  }
}

Playlists.propTypes = {
  fetchPlaylists: PropTypes.func.isRequired,
  playlists: PropTypes.object.isRequired
}

export default Playlists
