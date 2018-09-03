import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventDetails from './EventDetails'
import { toggleDynamicVoting } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event
})

const mapDispatchToProps = { toggleDynamicVoting }

const EventDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetails)

export default EventDetailsContainer