import React from 'react'
import renderer from 'react-test-renderer'
import CreateEvent from './CreateEvent'

describe('CreateEvent Snapshot', () => {
  it('has not changed unexpectedly', () => {
    const component = renderer.create(<CreateEvent />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
