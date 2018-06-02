import AppBar from '@material-ui/core/AppBar/AppBar'
import Avatar from '@material-ui/core/Avatar/Avatar'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import * as React from 'react'
import IAction from '../IAction'
import IUser from '../user/IUser'

const decorate = withStyles(({ transitions, zIndex }) => ({
  root: {},
  appBar: {
    transition: transitions.create(['width', 'margin'], {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.sharp
    }),
    zIndex: zIndex.drawer + 1
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
  title: {
    flex: 1,
    cursor: 'pointer'
  }
}))

interface IMainAppBarProps {
  user: IUser
  logout(): IAction
  handleTitleClicked(): void
}

export default decorate(
  class MainAppBar extends React.Component<
    IMainAppBarProps &
      WithStyles<
        'root' | 'appBar' | 'hide' | 'menuButton' | 'profile' | 'title'
      >
  > {
    public state = {
      anchorEl: undefined
    }

    public handleMenu = (event: any) => {
      this.setState({ anchorEl: event.currentTarget })
    }

    public handleClose = () => {
      this.setState({ anchorEl: undefined })
    }

    public handleTitleCLicked = () => {
      this.props.handleTitleClicked()
    }

    public render() {
      const { classes, user } = this.props
      const { anchorEl } = this.state
      const open = Boolean(anchorEl)
      const userHasProfileImage = !!user && !!user.image

      const profilePic = (
        <div className={classes.profile}>
          <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
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
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
              onClick={this.handleTitleCLicked}
            >
              MusicMonkey
            </Typography>

            {profilePic}
          </Toolbar>
        </AppBar>
      )
    }
  }
)
