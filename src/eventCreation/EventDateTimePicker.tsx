import { WithStyles } from '@material-ui/core/styles'
import { DateTimePicker } from 'material-ui-pickers'
import * as React from 'react'
import {decorate, IInputClasses} from '../globalStyles/Input'

interface IEventDateTimePickerProps {
  value: any
  label: string
  onChange(value: string): void
}

const EventDateTimePicker: React.SFC<IEventDateTimePickerProps & WithStyles<IInputClasses>> = props => {
  const handleChange = (event: any) => {
    props.onChange(event)
  }
  const { classes, label, value } = props
  return (
    <DateTimePicker
      disablePast={true}
      autoOk={true}
      fullWidth={true}
      ampm={false}
      value={value}
      onChange={handleChange}
      label={label}
      InputProps={{className: classes.input}}
      InputLabelProps={{className: classes.label}}
    />
  )
}

export default decorate(EventDateTimePicker)
