import { connect } from 'react-redux'
import { getEvents } from '../event/eventActions'
import IRootState from '../rootState'
import InsightsView from './InsightsView'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data,
  events: state.event.events,

})

const mapDispatchToProps = {
  getEvents,
}

const insightsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InsightsView)

export default insightsContainer
