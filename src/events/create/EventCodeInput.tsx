import TextField from 'material-ui/TextField'
import * as React from 'react'

interface IEventCodeInputProps {
  value: string
  onChange(value: string): void
}

const EventCodeInput: React.SFC<IEventCodeInputProps> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  return (
    <TextField
      label="Event Code"
      placeholder="Optionally password protect event"
      fullWidth={true}
      margin="normal"
      value={props.value}
      onChange={handleChange}
    />
  )
}

export default EventCodeInput
