import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { ConnectedRouter, routerActions } from 'react-router-redux'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'

import Callback from './auth/CallbackContainer'
import Login from './auth/LoginContainer'
import Home from './home/HomeContainer'
import CreateEvent from './events/CreateEventContainer'
import EventView from './events/view/EventViewContainer'
import EditEventContainer from './events/edit/EditEventContainer'

const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  allowRedirectBack: false,
  authenticatedSelector: state => !state.auth.isAuthenticated,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

const userIsAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => state.auth.isAuthenticated,
  redirectAction: routerActions.replace,
  redirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated'
})

const routes = [
  {
    component: userIsAuthenticated(Home),
    path: '/',
    routes: [
      {
        component: CreateEvent,
        exact: true,
        path: '/create-event'
      },
      {
        component: EventView,
        exact: true,
        path: '/events/:eventId'
      },
      {
        component: EditEventContainer,
        path: '/events/:eventId/edit'
      }
    ]
  }
]

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
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
