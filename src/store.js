import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import LogRocket from 'logrocket'
import reducers from './reducers'
import saga from './saga'

LogRocket.init('ftequc/music-monkey-host')

const isDevBuild = process.env.NODE_ENV !== 'production'
const history = createHistory()

const reactRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  duration: true
})

const rootMidlelwares = [
  reactRouterMiddleware,
  sagaMiddleware,
  logger,
  LogRocket.reduxMiddleware()
]

const middleware = isDevBuild
  ? [...rootMidlelwares, reduxImmutableStateInvariant()]
  : rootMidlelwares

const composeEnhancers = isDevBuild
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)
sagaMiddleware.run(saga)

export default store
