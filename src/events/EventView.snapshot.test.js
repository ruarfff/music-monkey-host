import React from 'react'
import renderer from 'react-test-renderer'
import EventView from './EventView'

describe('EventView Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const component = renderer.create(<EventView />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
