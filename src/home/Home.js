import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { RouteWithSubRoutes } from '../routes'
import { withStyles } from 'material-ui/styles'
import LoadingSpinner from '../loading/LoadingSpinner'
import Events from '../events/EventsContainer'
import MainAppBar from './MainAppBarContainer'
import Sidebar from './SidebarContainer'
import './Home.css'

const styles = theme => ({
  root: {
    content: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    },
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
})

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avatarMenuOpen: false
    }
  }

  render() {
    const { classes, user } = this.props

    if (user.data) {
      return (
        <div className={classes.root}>
          <MainAppBar user={user.data} />
          <Sidebar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/" component={Events} />
            {this.props.routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </main>
        </div>
      )
    } else {
      return <LoadingSpinner />
    }
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Home)
