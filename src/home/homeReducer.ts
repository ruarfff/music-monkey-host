import Action from '../Action'
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from './homeActions'
import initialState from './initialHomeState'

export default function home(state = initialState, { type }: Action) {
  switch (type) {
    case OPEN_SIDEBAR:
      return { ...initialState, sidebarIsOpen: true }
    case CLOSE_SIDEBAR:
      return { ...initialState, sidebarIsOpen: false }
    default:
      return state
  }
}
