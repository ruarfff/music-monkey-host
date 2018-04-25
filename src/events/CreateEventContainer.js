import { connect } from 'react-redux'

import CreateEvent from './CreateEvent'

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateEvent
)

export default CreateEventContainer
