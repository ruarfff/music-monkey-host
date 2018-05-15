import TextField from '@material-ui/core/TextField/TextField'
import * as React from 'react'

interface IEventOrganizerInputProps {
  value: string
  onChange(name: string): void
}

const EventOrganizerInput: React.SFC<IEventOrganizerInputProps> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  return (
    <TextField
      label="Organizer"
      placeholder="Who is organising this event?"
      required={true}
      fullWidth={true}
      margin="normal"
      value={props.value}
      onChange={handleChange}
    />
  )
}

export default EventOrganizerInput
