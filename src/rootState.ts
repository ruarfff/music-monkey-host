import IAuthState from './auth/IAuthState'
import IEventState from './event/IEventState'
import IEventPlaylistState from './eventPlaylist/IEventPlaylistState'
import IEventViewState from './eventView/IEventViewState'
import { IHomeState } from './home/IHomeState'
import IPlaylistState from './playlist/IPlaylistState'
import IPreGameState from './preGame/IPreGameState'
import ISuggestionState from './suggestion/ISuggestionState'
import IUserState from './user/IUserState'
import IVoteState from './vote/IVoteState'

export default interface IRootState {
  auth: IAuthState
  user: IUserState
  playlist: IPlaylistState
  home: IHomeState
  event: IEventState
  eventView: IEventViewState
  eventPlaylist: IEventPlaylistState
  preGame: IPreGameState
  suggestion: ISuggestionState
  vote: IVoteState
}
