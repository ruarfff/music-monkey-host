import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'

import './Playlist.css'

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
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
        <Paper style={style} zDepth={3} key={i}>
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
  playlists: PropTypes.object.isRequired,
  fetchPlaylists: PropTypes.func.isRequired
}

export default Playlists
