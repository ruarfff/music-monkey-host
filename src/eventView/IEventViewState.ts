import IEvent from '../events/IEvent'

export default interface IEventViewState {
  event?: IEvent
  loading: boolean
  fetchError?: Error
  eventTabIndex: number
  deleteSelected: boolean
  deleteSucceeded: boolean
  deleteFailed: boolean
  copiedToClipboard: boolean
}
