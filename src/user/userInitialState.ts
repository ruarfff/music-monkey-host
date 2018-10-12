import IUserState from './IUserState'

export const emptyUser = {
  data: undefined,
  error: undefined,
  isLoading: false,
  isUpdating: false,
} as IUserState
