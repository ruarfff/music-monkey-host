import IPregameSuggestion from './IPregameSuggestion'

export default interface IPreGameState {
  preGameTabIndex: number
  suggestions?: IPregameSuggestion[]
  suggestionFetchError?: Error
}
