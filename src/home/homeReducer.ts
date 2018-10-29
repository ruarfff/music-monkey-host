import { LOCATION_CHANGE } from 'connected-react-router'
import Action from '../IAction'
import {
  AVATAR_MENU_CLOSED,
  AVATAR_MENU_OPENED,
  SIDEBAR_CLOSED,
  SIDEBAR_OPENED
} from './homeActions'
import initialState from './homeInitialState'

export default function home(state = initialState, action: Action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...initialState,
        location: action.payload.pathname
      }
    case SIDEBAR_OPENED:
      return { ...initialState, sidebarIsOpen: true }
    case SIDEBAR_CLOSED:
      return { ...initialState, sidebarIsOpen: false }
    case AVATAR_MENU_OPENED: // TODO: This is not being used yet in MainAppBar. Got half way there but didn't finish.
      return { ...initialState, avatarMenuIsOpen: true }
    case AVATAR_MENU_CLOSED:
      return { ...initialState, avatarMenuIsOpen: false }
    default:
      return state
  }
}
