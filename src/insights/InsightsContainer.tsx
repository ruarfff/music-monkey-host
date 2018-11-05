import { connect } from 'react-redux'
import { getEvents } from '../event/eventActions'
import IRootState from '../rootState'
import { filterByEventPick } from './insightsActions'
import { sortPlaylistByVotesDescending } from '../eventPlaylist/eventPlaylistActions'
import './InsightsStyles.scss'
import InsightsView from './InsightsView'
import { fetchPlaylists } from '../playlist/playlistActions'
import { fetchEventVotes } from '../vote/voteActions'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data,
  events: state.event.events,
  pickedEvent: state.insights.eventId,
  votes: state.vote.votes,
  playlist: state.eventPlaylist.playlist
})

const mapDispatchToProps = {
  getEvents,
  filterByEventPick,
  sortPlaylistByVotesDescending,
  fetchPlaylists,
  fetchEventVotes,
}

const insightsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InsightsView)

export default insightsContainer
