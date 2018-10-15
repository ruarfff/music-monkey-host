import AppBar from '@material-ui/core/AppBar/AppBar'
import Avatar from '@material-ui/core/Avatar/Avatar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import * as React from 'react'
import { Link } from 'react-router-dom'
import eventIcon from '../assets/event-icon.svg'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import { onRsvpSaved } from '../notification'
import IUser from '../user/IUser'

const decorate = withStyles(({ transitions, zIndex }) => ({
  root: {},
  appBar: {
    transition: transitions.create(['width', 'margin'], {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.sharp
    }),
    zIndex: zIndex.drawer + 1,
    position: 'relative',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: 'black',
    paddingTop: '30px'
  },
  hide: {
    display: 'none'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  profile: {
    marginRight: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    cursor: 'pointer',
    fontSize: '34px',
    lineHeight: '40px',
    padding: '16px'
  },
  addEventBtn: {
    textTransform: 'uppercase',
    backgroundColor: '#F79022',
    color: 'white',
    padding: '8px 18px'
  },
  notification: {
    color: '#979797'
  },
  userName: {
    color: '#979797'
  },
  imageInButton: {
    marginRight: '5px'
  }
}))

interface IMainAppBarProps {
  user: IUser
  location: string
  event: IEvent
  logout(): IAction
  handleTitleClicked(): void
}

class MainAppBar extends React.Component<IMainAppBarProps & WithStyles> {
  public state = {
    anchorEl: undefined,
    notifications: 0
  }

  public handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = () => {
    this.setState({ anchorEl: undefined })
  }

  public menuName = (history: string) => {
    const { event } = this.props

    switch (history) {
      case '/':
        return 'Dashboard'
      case '/create-event':
        return 'Create Event'
      case '/all-events':
        return 'Events'
      case '/upcoming-events':
        return 'Events'
      case '/past-events':
        return 'Events'
      case `/events/${event && event.eventId}`:
        return event.name
      case '/account':
        return 'Account Settings'
      case '/insights':
        return 'Insights'
      default:
        return 'Dashboard'
    }
  }

  public handleNotifications = () => {
    this.setState({notifications: this.state.notifications++})
  }

  public render() {
    const { classes, user, location, handleTitleClicked } = this.props

    if (user) {
      onRsvpSaved(user.userId, this.handleNotifications)
    }
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const userHasProfileImage = !!user && !!user.image
    const userHasName = !!user && !!user.displayName

    const profilePic = (
      <div className={classes.profile}>
        {location !== '/create-event' && (
          <Link to="/create-event" className="Home-create-event-link">
            <Button
              variant="contained"
              size="small"
              className={classes.addEventBtn}
            >
              <img className={classes.imageInButton} src={eventIcon} alt="" />
              Create new event
            </Button>
          </Link>
        )}
        <IconButton color="inherit">
        <Badge
        className={classes.notification}
        badgeContent={this.state.notifications}
        color="secondary"
        >
        <NotificationsIcon />
        </Badge>
        </IconButton>
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
        {userHasName ? (
          <Typography className={classes.userName} onClick={handleTitleClicked}>
            {user.displayName}
          </Typography>
        ) : (
          <Typography className={classes.userName} onClick={handleTitleClicked}>
            Name
          </Typography>
        )}
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
          <Link to={'/account'}>
            <MenuItem onClick={this.handleClose}>My Account</MenuItem>
          </Link>
          <MenuItem onClick={this.props.logout}>Logout</MenuItem>
        </Menu>
      </div>
    )

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            onClick={handleTitleClicked}
          >
            {this.menuName(location)}
          </Typography>
          {profilePic}
        </Toolbar>
      </AppBar>
    )
  }
}

export default decorate(MainAppBar)
