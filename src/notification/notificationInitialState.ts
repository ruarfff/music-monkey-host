export interface INotification {
  userId: string,
  type: string,
  context: string,
  contextId: string,
  text: string,
  status: string
}


export interface INotificationState {
  error: string
  loading: boolean
  notifications: INotification[]
}

export default {
  error: '',
  loading: false,
  notifications: []
} as INotificationState
