import axios from 'axios'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export const getNotifications = (userId: string) => {
  return axios
    .get(serviceUrl + '/notification/' + userId, {
      withCredentials: true
    })
    .then(response =>
      console.log(response)
    )
}