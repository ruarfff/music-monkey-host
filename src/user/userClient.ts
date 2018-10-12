import axios from 'axios'
import IUser from './IUser'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export const getUserById = (userId: string) => {
  return axios
    .get(serviceUrl + '/users/' + userId, {
      withCredentials: true
    })
    .then(response => response)
}

export const getCurrentUser = () => {
  return axios
    .post(
      serviceUrl + '/users/me',
      {
        withCredentials: true
      }
    )
    .then(response => response)
}

export const updateUserById = (user: IUser) => {
  console.log(user)
  return axios
    .put(serviceUrl + '/users/' + user.userId, user, {
        withCredentials: true,
      })
    .then(res => res)
}
