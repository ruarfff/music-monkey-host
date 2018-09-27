import { WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField/TextField'
import * as React from 'react'
import {decorate, IInputClasses} from '../../globalStyles/Input'

interface IEventInputProps {
  value: string
  label: string
  placeholder?: string
  maxRows?: number
  error?: boolean
  errorLabel?: string
  onChange(value: string): void
  classes: IInputClasses
}

class EventInput extends React.Component<IEventInputProps & WithStyles> {

  public state = {
    touched: false
  }

  private handleChange = (event: any) => {
    this.props.onChange(event.target.value)
  }

  private handleClick = () => {
    this.setState({touched: true})
  }

  public render() {
    const {
      classes,
      label,
      placeholder,
      maxRows,
      value,
      error,
      errorLabel
    } = this.props

    const { touched } = this.state

    return (
      <TextField
        onClick={this.handleClick}
        label={error && touched ? errorLabel : label}
        placeholder={placeholder}
        required={true}
        autoFocus={true}
        fullWidth={true}
        rowsMax={maxRows}
        error={error && touched}
        margin="normal"
        multiline={!!maxRows}
        value={value}
        onChange={this.handleChange}
        InputProps={maxRows ? {className: classes.textArea} : {className: classes.input}}
        InputLabelProps={{className: classes.label}}
      />
    )
  }

}

export default decorate(EventInput)
