import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventPlaylist from './EventPlaylist'
import { saveEventPlaylist } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  saving: state.eventView.savingEventPlaylist,
  stagedSuggestions: state.suggestion.stagedSuggestions
})

const mapDispatchToProps = {
  saveEventPlaylist,
  onResetPlaylist: () => {}
}

const PreGameViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventPlaylist)

export default PreGameViewContainer
