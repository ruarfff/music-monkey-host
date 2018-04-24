import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import Avatar from 'material-ui/Avatar';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

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
    const { classes, user } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              align="center"
              variant="title"
              color="inherit"
              className={classes.title}
            >
              MusicMonkey
            </Typography>

            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Avatar alt="user profile" src={user.images[0].url} />
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
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles)(MainAppBar)
