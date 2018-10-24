import http from '../http'

export const loginWithCookie = async () => {
  const response = await http.get('/auth/verify', {
    withCredentials: true
  })
  return response.data
}

export const refreshToken = async () => {
  const response = await http.post(
    '/auth/refresh',
    {},
    {
      withCredentials: true
    }
  )
  return response.data
}

export const logout = async () => {
  const res = await http.get('/auth/logout', {
    withCredentials: true
  })
  console.log('Logout res', res)
}
