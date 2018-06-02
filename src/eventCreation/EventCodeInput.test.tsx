import { shallow } from 'enzyme'
import * as React from 'react'
import EventCodeInput from './EventCodeInput'

describe('<EventCodeInput />', () => {
  it('should render without crashing', () => {
    const dummyOnChange = (value: string) => ({})
    const wrapper = shallow(
      <EventCodeInput value={''} onChange={dummyOnChange} />
    )

    expect(wrapper).toBeTruthy()
  })

  it('shoud call onChange when input is updated', () => {
    const dummyOnChange = jest.fn()
    const wrapper = shallow(
      <EventCodeInput value={''} onChange={dummyOnChange} />
    )
    wrapper
      .find('TextField')
      .simulate('change', { target: { value: 'testing' } })
    expect(dummyOnChange).toHaveBeenCalledWith('testing')
  })
})
