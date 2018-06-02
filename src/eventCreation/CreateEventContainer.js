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
  saveEvent,
  selectExistingPlaylist,
  closeExistingPlaylist,
  selectCreatePlaylist,
  closeCreatePlaylist,
  createEventPlaylist,
  initializeCreateForm
} from '../events/eventActions'
import CreateEvent from './CreateEvent'

const mapStateToProps = state => ({ user: state.user, events: state.events })

const mapDispatchToProps = dispatch => ({
  cancel: () => {
    dispatch(eventSavingReset())
    dispatch(push('/'))
  },
  ...bindActionCreators(
    {
      closeCreatePlaylist,
      closeExistingPlaylist,
      createEventPlaylist,
      eventContentUpdated,
      eventImageUploadError,
      eventImageUploaded,
      initializeCreateForm,
      locationChanged,
      locationSelected,
      saveEvent,
      selectCreatePlaylist,
      selectExistingPlaylist
    },
    dispatch
  )
})

const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateEvent
)

export default CreateEventContainer
