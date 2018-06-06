import ISuggestionState from './ISuggestionState'

export default {
  suggestions: [],
  deletingSuggestion: false,
  fetchingSuggestions: false,
  savingSuggestion: false,
  deletingSuggestionError: undefined,
  fetchinSuggestionsError: undefined,
  savingSuggestionError: undefined
} as ISuggestionState
