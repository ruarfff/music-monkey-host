import TextField from 'material-ui/TextField'
import * as React from 'react'

interface IEventDescriptionInputProps {
  value: string
  onChange(value: string): void
}

const EventDescriptionInput: React.SFC<IEventDescriptionInputProps> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  return (
    <TextField
      label="Event description"
      multiline={true}
      fullWidth={true}
      margin="normal"
      rowsMax="4"
      value={props.value}
      onChange={handleChange}
    />
  )
}

export default EventDescriptionInput
