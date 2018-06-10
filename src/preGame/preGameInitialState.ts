import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import IPreGameState from './IPreGameState'
export default {
  preGameTabIndex: 0,
  acceptedSuggestionsByTrackUri: new Map<string, IDecoratedSuggestion>(),
  saving: false
} as IPreGameState
