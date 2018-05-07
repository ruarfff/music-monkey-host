import { withStyles } from 'material-ui/styles'
import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router'
import IAction from '../Action'
import Events from '../events/EventsContainer'
import LoadingSpinner from '../loading/LoadingSpinner'
import { RouteWithSubRoutes } from '../routes'
import { IUser } from '../user/UserModel'
import MainAppBar from './MainAppBarContainer'
import Sidebar from './SidebarContainer'

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
  fetchUser(): IAction
}

const Home = decorate<IHomeProps>(
  ({ classes, user, routes }) => (
    <React.Fragment>
      {user && (
        <div className={classes.root}>
          <MainAppBar />
          <Sidebar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact={true} path="/" component={Events} />
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </main>
        </div>
      )}

      {!user && <LoadingSpinner />}
    </React.Fragment>
  )
)

export default Home
