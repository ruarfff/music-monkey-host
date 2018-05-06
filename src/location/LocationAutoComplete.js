import React from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete from 'react-places-autocomplete'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  suggestion: {
    display: 'block'
  },
  suggestionsContainerOpen: {
    left: 0,
    listStyleType: 'none',
    margin: 0,
    marginTop: theme.spacing.unit,
    padding: 0,
    position: 'absolute',
    right: 0,
    zIndex: 1
  }
})

function renderInput(inputProps) {
  return (
    <TextField
      label="Location"
      fullWidth
      margin="normal"
      onChange={inputProps.onChange}
      onBlur={inputProps.onBlur}
      onKeyDown={inputProps.onKeyDown}
      placeholder={inputProps.placeholder}
      value={inputProps.value}
    />
  )
}

function renderSuggestion(
  suggestion,
  { query, className, getSuggestionItemProps }
) {
  const matches = match(suggestion.description, query)
  const parts = parse(suggestion.description, matches)
  const itemProps = getSuggestionItemProps(suggestion)
  return (
    <MenuItem
      className={className}
      selected={suggestion.active}
      component="div"
      key={suggestion.id}
    >
      <div {...itemProps}>
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
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div>
          {renderInput({
            ...getInputProps({
              formClass,
              placeholder
            })
          })}

          {renderSuggestionsContainer({
            children: suggestions.map(suggestion =>
              renderSuggestion(suggestion, {
                className: classes.suggestion,
                getSuggestionItemProps,
                query: value
              })
            ),
            className: classes.suggestionsContainerOpen
          })}
        </div>
      )}
    </PlacesAutocomplete>
  </div>
)

LocationAutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
  formClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default withStyles(styles)(LocationAutoComplete)
