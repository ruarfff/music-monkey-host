import React from 'react'
import renderer from 'react-test-renderer'
import MainAppBar from './MainAppBar'

test('Something', () => {
  const user = {}
  const component = renderer.create(<MainAppBar user={user} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
