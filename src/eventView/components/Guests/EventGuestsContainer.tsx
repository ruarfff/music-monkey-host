import { connect } from 'react-redux'
import IRootState from '../../../rootState'
import { clearMessage } from '../../../shareEvent/shareActions'
import { copyEventInvite } from '../../eventViewActions'
import EventGuests from './EventGuests'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  message: state.event.shareEventMessage
})

const mapDispatchToProps = {
  copyEventInvite,
  clearMessage,
}

const EventGuestsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventGuests)

export default EventGuestsContainer
