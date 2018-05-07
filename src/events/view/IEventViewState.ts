import IEvent from '../IEvent'

export default interface IEventViewState {
  event?: IEvent
  loading: boolean
  fetchError?: Error
  eventTabIndex: number
  deleteSelected: boolean
}
