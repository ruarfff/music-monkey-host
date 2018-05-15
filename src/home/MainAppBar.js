import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import { drawerWidth } from './homeConstants'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Avatar from '@material-ui/core/Avatar/Avatar'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    }),
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp
    }),
    width: `calc(100% - ${drawerWidth}px)`
  },
  hide: {
    display: 'none'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  profile: {
    marginRight: 12
  },
  profileSideOpen: {
    marginRight: -12
  },
  title: {
    flex: 1
  }
})

class MainAppBar extends React.Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, user, openSidebar } = this.props
    const { sidebarIsOpen } = this.props.home
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const userHasProfileImage = !!user.image

    const menuButton = (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={openSidebar}
        className={classNames(
          classes.menuButton,
          sidebarIsOpen && classes.hide
        )}
      >
        <MenuIcon />
      </IconButton>
    )

    const profilePic = (
      <div
        className={classNames(
          classes.profile,
          sidebarIsOpen && classes.profileSideOpen
        )}
      >
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          {userHasProfileImage ? (
            <Avatar alt="user profile" src={user.image} />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top'
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top'
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.props.logout}>Logout</MenuItem>
        </Menu>
      </div>
    )

    return (
      <AppBar
        position="absolute"
        className={classNames(
          classes.appBar,
          sidebarIsOpen && classes.appBarShift
        )}
      >
        <Toolbar disableGutters={!sidebarIsOpen}>
          {menuButton}

          <Typography variant="title" color="inherit" className={classes.title}>
            MusicMonkey
          </Typography>

          {profilePic}
        </Toolbar>
      </AppBar>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles)(MainAppBar)
