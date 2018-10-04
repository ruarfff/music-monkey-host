import { connect } from 'react-redux'
import { getEvents } from '../event/eventActions'
import IRootState from '../rootState'
import { filterByEventPick } from './insightsActions'
import './InsightsStyles.css'
import InsightsView from './InsightsView'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data,
  events: state.event.events,
  pickedEvent: state.insights.eventId
})

const mapDispatchToProps = {
  getEvents,
  filterByEventPick,
}

const insightsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InsightsView)

export default insightsContainer
