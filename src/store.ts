import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()
const isDevBuild = process.env.NODE_ENV !== 'production'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  duration: true
})

const rootMiddleWares = [sagaMiddleware, logger, routerMiddleware(history)]

const middleware = isDevBuild
  ? [...rootMiddleWares, reduxImmutableStateInvariant()]
  : rootMiddleWares

if (isDevBuild) {
  ;(Map.prototype as any).toJSON = function() {
    return JSON.parse(JSON.stringify([...this]))
  }
}

const windowIfDefined = typeof window === 'undefined' ? null : (window as any)
const composeEnhancers = isDevBuild
  ? windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(...middleware))
)
sagaMiddleware.run(rootSaga)
