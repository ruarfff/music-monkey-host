import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGGED_OUT
} from './authActions'
import initialState from './authInitialState'
import auth from './authReducer'

describe('authReducer', () => {
  it('should return the initial state when no action matches', () => {
    expect(auth(undefined, {})).toEqual(initialState)
  })

  it('should handle LOGGING_IN', () => {
    expect(auth(initialState, { type: LOGGING_IN })).toEqual({
      ...initialState,
      isAuthenticating: true
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      auth(initialState, {
        type: LOGIN_SUCCESS
      })
    ).toEqual({
      ...initialState,
      isAuthenticating: false,
      isAuthenticated: true
    })
  })

  it('should handle LOGIN_FAILURE', () => {
    expect(
      auth(initialState, {
        type: LOGIN_FAILURE,
        payload: new Error('oops')
      })
    ).toEqual({
      ...initialState,
      authError: new Error('oops'),
      isAuthenticating: false
    })
  })

  it('should handle LOGGED_OUT', () => {
    expect(
      auth(
        { ...initialState, isAuthenticated: true },
        {
          type: LOGGED_OUT
        }
      )
    ).toEqual({
      ...initialState,
      isAuthenticated: false
    })
  })
})
