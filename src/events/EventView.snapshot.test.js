import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import EventView from './EventView'

describe('EventView Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <EventView />
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
