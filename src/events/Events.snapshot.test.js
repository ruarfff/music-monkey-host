import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Events from './Events'

describe('Events Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Events />
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
