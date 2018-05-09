import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../../rootState'
import { onPreGameTabIndexChange } from './pregameActions'
import PreGameView from './PreGameView'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  preGameTabIndex: state.preGame.preGameTabIndex
})

const mapDispatchToProps = {
  onPreGameTabIndexChange
}

const PreGameViewContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PreGameView as any) as any
)

export default PreGameViewContainer
