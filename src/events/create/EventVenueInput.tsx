import TextField from '@material-ui/core/TextField/TextField'
import * as React from 'react'

interface IEventVenueInputProps {
  value: string
  onChange(value: string): void
}

const EventVenueInput: React.SFC<IEventVenueInputProps> = props => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  return (
    <TextField
      label="Venue"
      fullWidth={true}
      margin="normal"
      value={props.value}
      onChange={handleChange}
    />
  )
}

export default EventVenueInput
