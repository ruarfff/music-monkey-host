import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../../rootState'
import {
  fetchPreGameSuggestion,
  onPreGameTabIndexChange
} from './pregameActions'
import PreGameView from './PreGameView'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  preGameTabIndex: state.preGame.preGameTabIndex,
  suggestions: state.preGame.suggestions
})

const mapDispatchToProps = {
  onPreGameTabIndexChange,
  fetchPreGameSuggestion
}

const PreGameViewContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PreGameView as any) as any)

export default PreGameViewContainer
