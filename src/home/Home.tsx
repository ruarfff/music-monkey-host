import { History } from 'history'
import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router'
import Events from '../event/EventsContainer'
import LoadingSpinner from '../loading/LoadingSpinner'
import { RouteWithSubRoutes } from '../routes'
import IUser from '../user/IUser'
import LoginError from './LoginError'
import MainAppBar from './MainAppBarContainer'
import MainAppLeftMenu from './MainAppLeftMenu'

interface IHomeProps extends RouteComponentProps<any> {
  routes: Route[]
  user: IUser
  userLoading: boolean
  userError: Error
  history: History
}

const Home = ({ user, userLoading, userError, routes, history }: IHomeProps) => (
  <div className="Home-root">
    <MainAppLeftMenu path={history.location.pathname}/>
    <div className="Home-right-side">
      <MainAppBar />
      {user && (
        <main className="Home-content">
          <div className="Home-toolbar" />
          <Route exact={true} path="/" component={Events} />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </main>
      )}

      {userLoading && <LoadingSpinner />}
      {userError && <LoginError />}
    </div>
  </div>
)

export default Home
