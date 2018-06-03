import { withStyles } from '@material-ui/core/styles'
import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router'
import Events from '../event/EventsContainer'
import LoadingSpinner from '../loading/LoadingSpinner'
import { RouteWithSubRoutes } from '../routes'
import IUser from '../user/IUser'
import LoginError from './LoginError'
import MainAppBar from './MainAppBarContainer'

const decorate = withStyles(({ palette, spacing, mixins }) => ({
  root: {
    padding: spacing.unit,
    backgroundColor: palette.background.default,
    color: palette.primary.main,
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    zIndex: 1
  },
  content: {
    backgroundColor: palette.background.default,
    flexGrow: 1,
    padding: spacing.unit * 3
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...mixins.toolbar
  }
}))

interface IHomeProps extends RouteComponentProps<any> {
  routes: Route[]
  user: IUser
  userLoading: boolean
  userError: Error
}

const Home = decorate<IHomeProps>(
  ({ classes, user, userLoading, userError, routes }) => (
    <div className={classes.root}>
      <MainAppBar />
      {user && (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact={true} path="/" component={Events} />
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </main>
      )}

      {userLoading && <LoadingSpinner />}
      {userError && <LoginError />}
    </div>
  )
)

export default Home
