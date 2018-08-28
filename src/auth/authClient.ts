import axios from 'axios'
const serviceUrl = process.env.REACT_APP_MM_API_URL

export const loginWithCookie = () => {
  return axios
    .get(serviceUrl + '/auth/verify', {
      withCredentials: true
    })
    .then(response => response.data)
}

export const refreshToken = () => {
  return axios
    .post(
      serviceUrl + '/auth/refresh',
      {},
      {
        withCredentials: true
      }
    )
    .then(response => response.data)
}

export const logout = () => {
  return axios
    .get(serviceUrl + '/auth/logout', {
      withCredentials: true
    })
    .then(res => {
      console.log('Logout res', res)
    })
}
