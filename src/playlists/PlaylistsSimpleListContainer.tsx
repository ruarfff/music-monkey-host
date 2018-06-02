import { connect } from 'react-redux'
import IRootState from '../rootState';
import { fetchPlaylists, onPlaylistSelected } from './playlistActions'
import PlaylistsSimpleList from './PlaylistsSimpleList'

const mapStateToProps = (state: IRootState) => ({
  playlists: state.playlists,
  user: state.user.data
})

const mapDispatchToProps = {
  fetchPlaylists,
  onPlaylistSelected,
}

const PlaylistsSimpleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsSimpleList as any)

export default PlaylistsSimpleListContainer
