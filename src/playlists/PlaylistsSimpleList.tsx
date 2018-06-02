import Avatar from '@material-ui/core/Avatar/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import * as React from 'react'
import IAction from '../IAction'
import IUser from '../user/IUser'
import IPlaylist from './IPlaylist'
import IPlaylistState from './IPlaylistState'

interface IPlaylistsSimpleListProps {
  playlists: IPlaylistState
  user: IUser
  fetchPlaylists(): IAction
  onPlaylistSelected(playlist: IPlaylist): IAction
}

class PlaylistsSimpleList extends React.Component<
  IPlaylistsSimpleListProps,
  {}
> {
  public componentDidMount() {
    this.props.fetchPlaylists()
  }

  public render() {
    const { onPlaylistSelected, user, playlists } = this.props
    const handlePlaylistSelected = (playlist: IPlaylist) => () =>
      onPlaylistSelected(playlist)

    let playlistView = <p>You do not have any playlists yet</p>

    if (playlists.data) {
      if (playlists.data.items.length > 0) {
        playlistView = (
          <List>
            {playlists.data.items
              .filter(
                (playlist: IPlaylist) => playlist.owner.id === user.spotifyId
              )
              .map((playlist: IPlaylist, i: number) => (
                <ListItem
                  disabled={playlist.tracks.total < 1}
                  key={i}
                  button={true}
                  onClick={handlePlaylistSelected(playlist)}
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

export default PlaylistsSimpleList
