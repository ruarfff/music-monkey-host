import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import Avatar from 'material-ui/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { drawerWidth } from './homeConstants'

const styles = theme => ({
  title: {
    flex: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  profile: {
    marginRight: 12
  },
  profileSideOpen: {
    marginRight: -12
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
    const userHasProfileImage = user.images && user.images.length > 0

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
            <Avatar alt="user profile" src={user.images[0].url} />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
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
  user: PropTypes.object.isRequired,
  openSidebar: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
}

export default withStyles(styles)(MainAppBar)
