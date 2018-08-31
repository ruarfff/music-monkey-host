import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { getEventById } from '../eventView/eventViewActions'
import {
  deleteEvent,
  onEventDeleteClosed,
  onEventDeleteSelected
} from '../eventView/eventViewActions'
import IRootState from '../rootState'
import EditEvent from './EditEvent'

const mapStateToProps = (state: IRootState) => ({
  event: state.eventView.event,
  deleteSelected: state.eventView.deleteSelected,
  deleteSuccess: state.eventView.deleteSucceeded,
  deleteFailed: state.eventView.deleteFailed
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDeleteAcknowledged: () => {
    dispatch(push('/'))
  },
  ...bindActionCreators(
    {
      getEventById,
      deleteEvent,
      onEventDeleteSelected,
      onEventDeleteClosed
    },
    dispatch
  )
})

const EditEventContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEvent) as any)

export default EditEventContainer
