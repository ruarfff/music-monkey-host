import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { ConnectedRouter, routerActions } from 'react-router-redux'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'

import Callback from './auth/Callback'
import Login from './auth/LoginContainer'
import Home from './home/HomeContainer'
import CreateEvent from './events/CreateEventContainer'
import EventView from './events/EventView'

const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
  authenticatedSelector: state => !state.auth.isAuthenticated,
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.isAuthenticated,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

const routes = [
  {
    path: '/',
    component: userIsAuthenticated(Home),
    routes: [
      {
        path: '/create-event',
        component: CreateEvent,
        exact: true
      },
      {
        path: '/event-view',
        component: EventView
      }
    ]
  }
]

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
)

export const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/callback" component={Callback} />
      <Route path="/login" component={userIsNotAuthenticated(Login)} />
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </ConnectedRouter>
)

Routes.propTypes = {
  history: PropTypes.object.isRequired
}
