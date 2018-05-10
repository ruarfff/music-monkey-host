import { shallow } from 'enzyme'
import * as React from 'react'
import IAction from '../../Action'
import IEvent from '../IEvent';
import EventView from './EventView'

describe('<EventView />', () => {
  xit('should render without crashing', () => {  
    const event = {} as IEvent
    const eventTabIndex = 0
    const match = { params: {} }
    const error = {}    
    const deleteSelected = false
    const deleteSuccess = false
    const deleteFailed = false
    const loading = false
    const onEventTabIndexChange = (index: number): IAction  => ({} as IAction)
    const onEventDeleteSelected = (): IAction => ({} as IAction)
    const onEventDeleteClosed = (): IAction => ({} as IAction)
    const deleteEvent = (e: IEvent): IAction => ({} as IAction)
    const onDeleteAknowledged = (): IAction => ({} as IAction)
    const getEventById = (): IAction => ({} as IAction)
    const wrapper = shallow(
      <EventView
      event={event}
        match={match}
        error={error}
        deleteSelected={deleteSelected}
        deleteSuccess={deleteSuccess}
        deleteFailed={deleteFailed}
        loading={loading}        
        eventTabIndex={eventTabIndex}
        getEventById={getEventById}
        onEventTabIndexChange={onEventTabIndexChange}
        onEventDeleteSelected={onEventDeleteSelected}
        onEventDeleteClosed={onEventDeleteClosed}
        deleteEvent={deleteEvent}
        onDeleteAknowledged={onDeleteAknowledged}
      />
    )

    expect(wrapper).toBeTruthy()
  })
})
