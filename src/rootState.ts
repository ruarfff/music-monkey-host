import IAuthState from './auth/IAuthState'
import IEventState from './event/IEventState'
import IEventViewState from './eventView/IEventViewState'
import { IHomeState } from "./home/IHomeState";
import IPlaylistState from './playlist/IPlaylistState'
import IPreGameState from './preGame/IPreGameState'
import ISuggestionState from './suggestion/ISuggestionState'
import ITrackState from './track/ITrackState'
import IUserState from './user/IUserState'

export default interface IRootState {
  auth: IAuthState
  user: IUserState
  playlist: IPlaylistState
  home: IHomeState
  event: IEventState
  eventView: IEventViewState
  preGame: IPreGameState
  track: ITrackState
  suggestion: ISuggestionState
}
