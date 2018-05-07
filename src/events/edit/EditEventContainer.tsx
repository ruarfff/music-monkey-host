import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import IRootState from '../../rootState'
import { getEventById } from '../view/eventViewActions'
import EditEvent from './EditEvent'

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = { getEventById }

const EditEventContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEvent) as any)

export default EditEventContainer
