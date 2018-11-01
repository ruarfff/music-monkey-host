import * as React from 'react'
import Select from 'react-select'
import options from './genras'
import './GenrePicker.scss'

interface IGenrePickerProps {
  onChange(value: string): void
}

const customStyles = {
  control: () => ({
    border: '1px solid #979797',
    display: 'flex',
    borderRadius: '4px',
    height: '40px'
  }),
}

class GenrePicker extends React.PureComponent<IGenrePickerProps> {
  public state = {
    selectedOption: null,
  }

  public render() {
    return(
      <React.Fragment>
        <Select
          className="select"
          options={options}
          styles={customStyles}
          onChange={this.handleChange}
          value={this.state.selectedOption}
          placeholder={'Select genre'}
        />
      </React.Fragment>
    )
  }

  private handleChange = (selectedOption: any) => {
    this.setState({ selectedOption })
    this.props.onChange(selectedOption.value)
  }
}

export default GenrePicker