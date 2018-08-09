import IEvent from '../event/IEvent'

export default interface IEventViewState {
  event?: IEvent
  loading: boolean
  fetchError?: Error
  deleteSelected: boolean
  deleteSucceeded: boolean
  deleteFailed: boolean
  copiedToClipboard: boolean
}
