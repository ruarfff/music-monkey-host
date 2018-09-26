import { WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField/TextField'
import * as React from 'react'
import {decorate, IInputClasses} from '../../globalStyles/Input'

interface IEventInputProps {
  value: string
  label: string
  placeholder?: string
  maxRows?: number
  onChange(value: string): void
}

export const EventInput: React.SFC<IEventInputProps & WithStyles<IInputClasses>> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  const { classes, label, placeholder, maxRows, value } = props
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      required={true}
      autoFocus={true}
      fullWidth={true}
      rowsMax={maxRows}
      margin="normal"
      multiline={maxRows ? true : false}
      value={value}
      onChange={handleChange}
      InputProps={maxRows ? {className: classes.textArea} : {className: classes.input}}
      InputLabelProps={{className: classes.label}}
    />
  )
}

export default decorate(EventInput)
