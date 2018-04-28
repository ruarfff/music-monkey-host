import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import {
  locationChanged,
  locationSelected,
  eventContentUpdated,
  eventImageUploaded,
  eventImageUploadError,
  eventSavingReset,
  eventSaved,
  selectExistingPlaylist,
  closeExistingPlaylist,
  selectCreatePlaylist,
  closeCreatePlaylist
} from './eventActions'
import CreateEvent from './CreateEvent'

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = dispatch => ({
  cancel: () => {
    dispatch(eventSavingReset())
    dispatch(push('/'))
  },
  ...bindActionCreators(
    {
      locationChanged,
      locationSelected,
      eventContentUpdated,
      eventImageUploaded,
      eventImageUploadError,
      eventSaved,
      selectExistingPlaylist,
      closeExistingPlaylist,
      selectCreatePlaylist,
      closeCreatePlaylist
    },
    dispatch
  )
})

const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateEvent
)

export default CreateEventContainer
