import React from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete from 'react-places-autocomplete'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'
import { withStyles } from 'material-ui/styles'
import { FormGroup, FormControl } from 'material-ui/Form'

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  suggestion: {
    display: 'block'
  }
})

function renderInput(inputProps) {
  console.log(inputProps)
  return (
    <FormGroup row>
      <FormControl className={inputProps.formClass}>
        <InputLabel htmlFor="ce-l">Location</InputLabel>
        <Input
          id="ce-l"
          onChange={inputProps.onChange}
          placeholder={inputProps.plpaceholder}
        />
      </FormControl>
    </FormGroup>
  )
}

function renderSuggestion(suggestion, { query, className }) {
  const matches = match(suggestion.description, query)
  const parts = parse(suggestion.description, matches)

  return (
    <MenuItem
      className={className}
      selected={suggestion.active}
      component="div"
      key={suggestion.id}
    >
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          )
        })}
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer(options) {
  const { className, children } = options
  return (
    <Paper className={className} square>
      {children}
    </Paper>
  )
}

const LocationAutoComplete = ({
  classes,
  onChange,
  onSelect,
  placeholder,
  value,
  formClass
}) => (
  <div className={classes.container}>
    <PlacesAutocomplete onChange={onChange} onSelect={onSelect} value={value}>
      {({ getInputProps, suggestions }) => (
        <div>
          {renderInput({
            ...getInputProps({
              placeholder,
              formClass
            })
          })}
          {renderSuggestionsContainer({
            children: suggestions.map(renderSuggestion, {
              query: value,
              className: classes.suggestion
            }),
            className: classes.suggestionsContainerOpen
          })}
        </div>
      )}
    </PlacesAutocomplete>
  </div>
)

LocationAutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default withStyles(styles)(LocationAutoComplete)
