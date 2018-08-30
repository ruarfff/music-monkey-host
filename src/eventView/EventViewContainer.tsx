import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../rootState'
import EventView from './EventView'
import {
  acknowledgeEventInviteCopied,
  copyEventInvite,
  getEventById
} from './eventViewActions'

const mapStateToProps = (state: IRootState) => ({
  error: state.eventView.fetchError,
  event: state.eventView.event,
  loading: state.eventView.loading,
  copiedToClipboard: state.eventView.copiedToClipboard
})

const mapDispatchToProps = {
  getEventById,
  copyEventInvite,
  acknowledgeEventInviteCopied
}

const EventViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EventView))

export default EventViewContainer
