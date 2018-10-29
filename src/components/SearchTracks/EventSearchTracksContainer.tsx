import { connect } from 'react-redux'
import { searchTrack } from '../../playlist/playlistActions'
import IRootState from '../../rootState'
import EventSearchTracks from './EventSearchTracks'

const mapStateToProps = (state: IRootState) => ({
    searchResult: state.playlist.searchResult
})

const mapDispatchToProps = {
  searchTrack,
}

const EventSearchTracksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSearchTracks)

export default EventSearchTracksContainer
