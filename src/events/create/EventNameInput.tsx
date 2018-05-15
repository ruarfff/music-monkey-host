import TextField from '@material-ui/core/TextField/TextField'
import * as React from 'react'

interface IEventNameInputProps {
  value: string
  onChange(value: string): void
}

const EventNameInput: React.SFC<IEventNameInputProps> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  return (
    <TextField
      label="Event Name"
      placeholder="Provide a name for your event"
      required={true}
      autoFocus={true}
      fullWidth={true}
      margin="normal"
      value={props.value}
      onChange={handleChange}
    />
  )
}

export default EventNameInput
