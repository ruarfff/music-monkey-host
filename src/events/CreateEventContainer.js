import { connect } from 'react-redux'
import { locationChanged, locationSelected } from './eventActions'
import CreateEvent from './CreateEvent'

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = {
  locationChanged,
  locationSelected
}

const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateEvent
)

export default CreateEventContainer
