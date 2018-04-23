import { USER_LOGIN_SUCCESS, USER_LOGGED_OUT, USER_LOGIN } from './userActions'
import initialState from './userInitialState'
import user from './userReducer'

it('should return the initial state when no action matches', () => {
  expect(user(undefined, {})).toEqual(initialState)
})

it('should handle USER_LOGIN', () => {
  expect(user({}, { type: USER_LOGIN })).toEqual({
    data: null,
    isLoading: true
  })
})

it('user should handle USER_LOGIN_SUCCESS', () => {
  expect(
    user(
      {},
      {
        type: USER_LOGIN_SUCCESS,
        payload: {
          id: 'test-id'
        }
      }
    )
  ).toEqual({
    data: { id: 'test-id' },
    isLoading: false
  })
})

it('user should handle LOGOUT_SUCCESS', () => {
  expect(
    user(
      {
        data: {
          name: 'harry',
          id: 'test-id'
        },
        isLoading: false
      },
      {
        type: USER_LOGGED_OUT
      }
    )
  ).toEqual({ data: null, isLoading: false })
})
