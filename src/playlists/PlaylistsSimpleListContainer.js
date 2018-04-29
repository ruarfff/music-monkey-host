import { connect } from 'react-redux'
import { fetchPlaylists } from './playlistActions'
import PlaylistsSimpleList from './PlaylistsSimpleList'

const mapStateToProps = state => ({ playlists: state.playlists })

const mapDispatchToProps = {
  fetchPlaylists
}

const PlaylistsSimpleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsSimpleList)

export default PlaylistsSimpleListContainer
