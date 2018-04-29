import { connect } from 'react-redux'
import { fetchPlaylists } from './playlistActions'
import Playlists from './Playlists'

const mapStateToProps = state => ({ playlists: state.playlists })

const mapDispatchToProps = {
  fetchPlaylists
}

const PlaylistsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Playlists
)

export default PlaylistsContainer
