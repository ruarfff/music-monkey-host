import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventSummaryPlaylist from './EventSummaryPlaylist'
const mapStateToProps = (state: IRootState) => ({
    playlist: state.eventPlaylist.playlist
})
const mapDispatchToProps = {  }
const EventSummaryPlaylistContainer = connect(
mapStateToProps,
mapDispatchToProps
)(EventSummaryPlaylist)
export default EventSummaryPlaylistContainer