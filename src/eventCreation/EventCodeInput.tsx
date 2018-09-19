import { WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField/TextField'
import * as React from 'react'
import {decorate, IInputClasses} from '../globalStyles/Input'

interface IEventCodeInputProps {
  value: string
  onChange(value: string): void
}

const EventCodeInput: React.SFC<IEventCodeInputProps & WithStyles<IInputClasses>> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  const { classes } = props
  return (
    <TextField
      label="Event Code"
      placeholder="Optionally password protect event"
      fullWidth={true}
      margin="normal"
      value={props.value}
      onChange={handleChange}
      InputProps={{className: classes.input}}
      InputLabelProps={{className: classes.label}}
    />
  )
}

export default decorate(EventCodeInput)
