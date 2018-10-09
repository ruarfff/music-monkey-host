import axios from 'axios'

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
