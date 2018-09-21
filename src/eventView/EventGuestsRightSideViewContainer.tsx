import { connect } from 'react-redux'
import IRootState from '../rootState'
import EventGuestsRightSideView from './EventGuestsRightSideView'
import { copyEventInvite } from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event
})

const mapDispatchToProps = {
  copyEventInvite,
}

const EventGuestsRightSideViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventGuestsRightSideView)

export default EventGuestsRightSideViewContainer
