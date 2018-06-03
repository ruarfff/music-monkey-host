import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import {
  closeCreatePlaylist,
  closeExistingPlaylist,
  createEventPlaylist,
  eventContentUpdated,
  eventImageUploaded,
  eventImageUploadError,
  eventSavingReset,
  initializeCreateForm,
  locationChanged,
  locationSelected,
  saveEvent,
  selectCreatePlaylist,
  selectExistingPlaylist
} from '../event/eventActions'
import { fetchPlaylists } from '../playlist/playlistActions'
import IRootState from '../rootState'
import CreateEvent from './CreateEvent'

const mapStateToProps = (state: IRootState) => ({
  user: state.user.data,
  event: state.events.savingEvent,
  shouldShowSavedDialogue: state.events.showSavedDialogue,
  playlistInput: state.events.playlistInput,
  playlists: state.playlists.data
})

const mapDispatchToProps = (dispatch: any) => ({
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
      selectExistingPlaylist,
      fetchPlaylists
    },
    dispatch
  )
})

const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(
  CreateEvent
)

export default CreateEventContainer
