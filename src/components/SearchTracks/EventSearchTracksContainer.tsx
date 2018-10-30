import { connect } from 'react-redux'
import {
  searchTrack,
  addTrack,
} from '../../playlist/playlistActions'
import IRootState from '../../rootState'
import EventSearchTracks from './EventSearchTracks'

const mapStateToProps = (state: IRootState) => ({
  searchResult: state.playlist.searchResult,
  playlistId: state.eventPlaylist.playlist.id
})

const mapDispatchToProps = {
  searchTrack,
  addTrack,
}

const EventSearchTracksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSearchTracks)

export default EventSearchTracksContainer
