import Action from '../IAction'
import {
  AVATAR_MENU_CLOSED,
  AVATAR_MENU_OPENED,
  SIDEBAR_CLOSED,
  SIDEBAR_OPENED
} from './homeActions'
import initialState from './homeInitialState'

export default function home(state = initialState, { type }: Action) {
  switch (type) {
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
