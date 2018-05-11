import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../../rootState'
import UserSuggestionsView from './UserSuggestionsView'

const mapStateToProps = (state: IRootState) => ({
  preGameTabIndex: state.preGame.preGameTabIndex,
  suggestions: state.preGame.suggestions
})

const mapDispatchToProps = {}

const UserSuggestionsViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSuggestionsView as any) as any)

export default UserSuggestionsViewContainer
