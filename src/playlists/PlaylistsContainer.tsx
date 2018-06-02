import { connect } from 'react-redux'
import IRootState from '../rootState';
import { fetchPlaylists } from './playlistActions'
import Playlists from './Playlists'

const mapStateToProps = (state: IRootState) => ({ playlists: state.playlists })

const mapDispatchToProps = {
  fetchPlaylists
}

const PlaylistsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Playlists
)

export default PlaylistsContainer
