import IEventViewState from './IEventViewState'

export default {
  event: undefined,
  loading: false,
  fetchError: undefined,
  eventTabIndex: 0,
  deleteSelected: false,
  copiedToClipboard: false
} as IEventViewState