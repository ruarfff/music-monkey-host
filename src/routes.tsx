import * as React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerActions } from 'react-router-redux'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import Callback from './auth/CallbackContainer'
import Login from './auth/LoginContainer'
import CreateEvent from './events/CreateEventContainer'
import EditEventContainer from './events/edit/EditEventContainer'
import EventView from './events/view/EventViewContainer'
import Home from './home/HomeContainer'
import IRootState from './rootState'

const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  allowRedirectBack: false,
  authenticatedSelector: (state: IRootState) => !state.auth.isAuthenticated,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

const userIsAuthenticated = connectedRouterRedirect({
  authenticatedSelector: (state: IRootState) => state.auth.isAuthenticated,
  redirectAction: routerActions.replace,
  redirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated'
})

const routes = [
  {
    component: userIsAuthenticated(Home as any),
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
  },
  {
    component: userIsNotAuthenticated(Login as any),
    path: '/login'
  },
  {
    component: Callback,
    path: '/callback'
  }
]

const renderSubRoutes = (route: any) => (props: any) => (
  <route.component {...props} routes={route.routes} />
)

export const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={renderSubRoutes(route)}
  />
)

interface IRoutesProps {
  history: any
}

export const Routes: React.SFC<IRoutesProps> = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </ConnectedRouter>
)
