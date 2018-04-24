import React from 'react'
import renderer from 'react-test-renderer'
import Events from './Events'

describe('Events Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const component = renderer.create(<Events />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
