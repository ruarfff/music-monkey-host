import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userActions'
import initialState from './userInitialState'
import user from './userReducer'

it('should return the initial state when no action matches', () => {
  expect(user(undefined, {})).toEqual(initialState)
})

it('should handle FETCH_USER', () => {
  expect(user(initialState, { type: FETCH_USER })).toEqual({
    ...initialState,
    isLoading: true
  })
})

it('should handle FETCH_USER_SUCCESS', () => {
  expect(
    user(
      { ...initialState, isLoading: true },
      {
        payload: {
          id: 'test-id'
        },
        type: FETCH_USER_SUCCESS
      }
    )
  ).toEqual({
    ...initialState,
    data: { id: 'test-id' },
    isLoading: false
  })
})

it('should handle FETCH_USER_ERROR', () => {
  expect(
    user(initialState, {
      payload: new Error('Oh dear :('),
      type: FETCH_USER_ERROR
    })
  ).toEqual({ ...initialState, error: new Error('Oh dear :(') })
})
