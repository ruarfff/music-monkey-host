import axios from 'axios'

const serviceUrl = process.env.REACT_APP_MM_API_URL

export const sendEmails = (emails: string[]) => {
  return axios
    .post(serviceUrl + '/share/email',
      { emails },
      { withCredentials: true }
    )
    .then(response =>
      response
    )
}