import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventGuests from './EventGuests'
import { copyEventInvite } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event
})

const mapDispatchToProps = {
  copyEventInvite,
}


const EventGuestsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventGuests)

export default EventGuestsContainer
