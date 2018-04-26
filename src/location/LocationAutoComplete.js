import React from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete from 'react-places-autocomplete'

const LocationAutoComplete = ({ onChange, onSelect, placeholder }) => (
  <PlacesAutocomplete onChange={onChange} onSelect={onSelect}>
    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
      <div>
        <input
          {...getInputProps({
            placeholder,
            className: 'location-search-input'
          })}
        />
        <div className="autocomplete-dropdown-container">
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item'
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' }
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style
                })}
              >
                <span>{suggestion.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete>
)

LocationAutoComplete.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default LocationAutoComplete
