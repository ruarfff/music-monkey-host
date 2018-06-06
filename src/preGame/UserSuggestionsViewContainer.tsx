import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../rootState'
import {
  acceptAllSuggestedTracks,
  acceptOneSuggestedTrack,
  deleteOneSuggestedTrack
} from './pregameActions'
import UserSuggestionsView from './UserSuggestionsView'

const mapStateToProps = (state: IRootState) => ({
  preGameTabIndex: state.preGame.preGameTabIndex,
  suggestions: state.suggestion.suggestions
})

const mapDispatchToProps = {
  acceptAllSuggestedTracks,
  acceptOneSuggestedTrack,
  deleteOneSuggestedTrack
}

const UserSuggestionsViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSuggestionsView as any) as any)

export default UserSuggestionsViewContainer
