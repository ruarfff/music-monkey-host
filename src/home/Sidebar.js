import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import EventIcon from '@material-ui/icons/Event'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { drawerWidth } from './homeConstants'
import Link from 'react-router-dom/Link'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp
    }),
    whiteSpace: 'nowrap',
    width: drawerWidth
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
})

class Sidebar extends Component {
  render() {
    const { classes, theme, closeSidebar } = this.props
    const { sidebarIsOpen } = this.props.home

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !sidebarIsOpen && classes.drawerPaperClose
          )
        }}
        open={sidebarIsOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={closeSidebar}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Sidebar)
