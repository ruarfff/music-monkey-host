import IAction from '../IAction'

export const SHARE_EMAIL_REQUEST = 'SHARE_EMAIL_REQUEST'
export const SHARE_EMAIL_FAILURE = 'SHARE_EMAIL_FAILURE'
export const SHARE_EMAIL_SUCCESS = 'SHARE_EMAIL_SUCCESS'

export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const clearMessage = (): IAction => {
  return {
    type: CLEAR_MESSAGE
  }
}

export const shareByEmails = (emails: string[]): IAction => {
  return {
    type: SHARE_EMAIL_REQUEST,
    payload: emails
  }
}

export const shareByEmailsSuccess = (message: string): IAction => {
  return {
    type: SHARE_EMAIL_SUCCESS,
    payload: message
  }
}

export const shareByEmailsFailure = (message: string): IAction => {
  return {
    type: SHARE_EMAIL_FAILURE,
    payload: message
  }
}