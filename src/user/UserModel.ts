export interface IAuth {
  accessToken: string
  expiresIn: number
  refreshToken: string
}

export interface IUser {
  birthdate: string
  country: string
  createdAt: any
  displayName: string
  email: string
  image: string
  userId: string
}

export interface IUserState {
  data?: IUser
  error?: Error
  isLoading: boolean
}
