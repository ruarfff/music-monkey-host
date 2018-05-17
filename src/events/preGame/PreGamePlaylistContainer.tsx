import { connect } from 'react-redux'
import IRootState from '../../rootState'
import PreGamePlaylist from './PreGamePlaylist'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  acceptedTracks: state.preGame.acceptedTracks
})

const mapDispatchToProps = {}

const PreGamePlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(
  PreGamePlaylist as any
)

export default PreGamePlaylistContainer
