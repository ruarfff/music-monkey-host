import * as React from 'react'

import Paper from '@material-ui/core/Paper/Paper'
import IAction from '../IAction'
import IPlaylist from './IPlaylist'
import IPlaylistState from './IPlaylistState'
import './Playlist.css'

const style = {
  display: 'inline-block',
  height: 200,
  margin: 20,
  textAlign: 'center',
  width: 200
} as React.CSSProperties

interface IPlaylistProps {
  playlists: IPlaylistState
  fetchPlaylists(): IAction
}

class Playlists extends React.Component<IPlaylistProps, {}> {
  public componentDidMount() {
    this.props.fetchPlaylists()
  }

  public render() {
    let playlists = []
    let playlistView = <p>No Playlists yet</p>

    if (this.props.playlists.data) {
      playlists = this.props.playlists.data.items
      playlistView = playlists.map((playlist: IPlaylist, i: number) => (
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

export default Playlists
