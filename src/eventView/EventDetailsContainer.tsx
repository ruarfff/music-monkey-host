import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventDetails from './EventDetails'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event
})

const mapDispatchToProps = {}

const EventDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails)

export default EventDetailsContainer
