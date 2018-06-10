import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion';

export default interface IPreGameState {
  preGameTabIndex: number
  suggestionFetchError?: Error
  acceptedSuggestions: IDecoratedSuggestion[]
  saving: boolean
}
