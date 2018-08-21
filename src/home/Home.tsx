import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router'
import Events from '../event/EventsContainer'
import LoadingSpinner from '../loading/LoadingSpinner'
import { RouteWithSubRoutes } from '../routes'
import IUser from '../user/IUser'
import LoginError from './LoginError'
import MainAppBar from './MainAppBarContainer'

interface IHomeProps extends RouteComponentProps<any> {
  routes: Route[]
  user: IUser
  userLoading: boolean
  userError: Error
}

const Home = ({ user, userLoading, userError, routes }: IHomeProps) => (
  <div className="Home-root">
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
)

export default Home
