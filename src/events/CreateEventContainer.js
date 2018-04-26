import { connect } from 'react-redux'
import { locationChanged, locationSelected, eventContentUpdated } from './eventActions'
import CreateEvent from './CreateEvent'

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = {
  locationChanged,
  locationSelected,
  eventContentUpdated
}

const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateEvent
)

export default CreateEventContainer
