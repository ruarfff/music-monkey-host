import { connect } from 'react-redux'
import IRootState from '../rootState'
import { savePreGamePlaylist } from './pregameActions'
import PreGamePlaylist from './PreGamePlaylist'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  hasAcceptedTrack: state.preGame.acceptedSuggestions.length > 0,
  acceptedSuggestions: state.preGame.acceptedSuggestions,
  saving: state.preGame.saving
})

const mapDispatchToProps = { savePreGamePlaylist }

const PreGamePlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreGamePlaylist as any)

export default PreGamePlaylistContainer
