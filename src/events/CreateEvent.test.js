import React from 'react'
import { shallow } from 'enzyme'
import CreateEvent from './CreateEvent'

describe('<CreateEvent />', () => {
  it('should render without crashing', () => {
    const user = {}
    const events = {}
    const playlistInput = {}
    const locationChanged = () => {}
    const locationSelected = () => {}
    const eventContentUpdated = () => {}
    const eventImageUploaded = () => {}
    const eventImageUploadedError = () => {}
    const saveEvent = () => {}
    const cancel = () => {}
    const selectExistingPlaylist = () => {}
    const closeExistingPlaylist = () => {}
    const selectCreatePlaylist = () => {}
    const closeCreatePlaylist = () => {}
    const createEventPlaylist = () => {}
    const initializeCreateForm = () => {}

    const wrapper = shallow(
      <CreateEvent
        user={user}
        events={events}
        locationChanged={locationChanged}
        locationSelected={locationSelected}
        eventContentUpdated={eventContentUpdated}
        eventImageUploaded={eventImageUploaded}
        eventImageUploadError={eventImageUploadedError}
        saveEvent={saveEvent}
        cancel={cancel}
        playlistInput={playlistInput}
        selectExistingPlaylist={selectExistingPlaylist}
        closeExistingPlaylist={closeExistingPlaylist}
        selectCreatePlaylist={selectCreatePlaylist}
        closeCreatePlaylist={closeCreatePlaylist}
        createEventPlaylist={createEventPlaylist}
        initializeCreateForm={initializeCreateForm}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
