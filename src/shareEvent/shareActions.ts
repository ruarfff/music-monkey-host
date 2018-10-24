import IAction from '../IAction'

export const SHARE_EMAIL_REQUEST = 'SHARE_EMAIL_REQUEST'
export const SHARE_EMAIL_FAILURE = 'SHARE_EMAIL_FAILURE'
export const SHARE_EMAIL_SUCCESS = 'SHARE_EMAIL_SUCCESS'

export const shareByEmails = (emails: string[]): IAction => {
  return {
    type: SHARE_EMAIL_REQUEST,
    payload: emails
  }
}

export const shareByEmailsSuccess = (): IAction => {
  return {
    type: SHARE_EMAIL_SUCCESS,
  }
}

export const shareByEmailsFailure = (): IAction => {
  return {
    type: SHARE_EMAIL_FAILURE,
  }
}