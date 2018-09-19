import { shallow } from 'enzyme'
import * as React from 'react'
import EventInput from './EventInput'

describe('<EventInput />', () => {
  it('should render without crashing', () => {
    const dummyOnChange = (value: string) => ({})
    const wrapper = shallow(
      <EventInput label={''} value={''} onChange={dummyOnChange} />
    )

    expect(wrapper).toBeTruthy()
  })

  it('shoud call onChange when input is updated', () => {
    const dummyOnChange = jest.fn()
    const wrapper = shallow(
      <EventInput label={''} value={''} onChange={dummyOnChange} />
    )
    wrapper
      .find('TextField')
      .simulate('change', { target: { value: 'testing' } })
    expect(dummyOnChange).toHaveBeenCalledWith('testing')
  })
})
