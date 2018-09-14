import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import * as React from 'react'
import { Link } from 'react-router-dom'
import EventIcon from '../assets/event-icon.svg'
import HomeIcon from '../assets/home-icon.svg'
import logo from '../assets/logo-home.svg'
import SubMenuIcon from '../assets/submenu-icon.svg'

const decorate = withStyles(({}) => ({
  listItemText: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px'
  },
  listItem: {
    color: 'white',
  },
  subItemText: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '12px'
  },
  subListItem: {
    paddingLeft: '78px',
  }
}))


export default decorate(
  class MainAppLeftMenu extends React.Component<
    {} &
    WithStyles<
      'listItemText' | 'listItem' | 'subItemText' | 'subListItem'
      >
    > {
    public state = {
      isOpen: false,
    }

    public handleOpen = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    public renderListItem = (text: string, icon: string, textStyle: string, collapsed: boolean) => {
      const { classes } = this.props
      return (
        <ListItem className={classes.listItem} button={true} onClick={this.handleOpen}>
          <ListItemIcon>
            <img src={icon}/>
          </ListItemIcon>
          <ListItemText
            inset={true}
            disableTypography={true}
            primary={
              <Typography className={textStyle}>
                {text}
              </Typography>
            }
          />
          {
            collapsed ? (this.state.isOpen ?
            <ExpandLess color="inherit" /> :
            <ExpandMore color="inherit" />) : ''
          }
        </ListItem>
      )
    }

    public renderSubMenuItem = (text: string) => {
      const { classes } = this.props

      return (
        <ListItem className={classes.subListItem} button={true}>
          <ListItemIcon>
            <img src={SubMenuIcon}/>
          </ListItemIcon>
          <ListItemText inset={true} primary={
            <Typography className={classes.subItemText}>
              {text}
            </Typography>
          }/>
        </ListItem>
      )
    }

    public render() {
      const { classes } = this.props

      return (
        <div className="Home-left-menu">
          <div className="Home-logo-container">
            <img src={logo} alt=""/>
          </div>
          <List>
            <Link className={classes.listItemText} to="/">
              {this.renderListItem('Home', HomeIcon, classes.listItemText, false)}
            </Link>
            {this.renderListItem('Events', EventIcon, classes.listItemText, true)}
            <Collapse in={this.state.isOpen} timeout="auto" unmountOnExit={true}>
              <List component="div" disablePadding={true}>
                {this.renderSubMenuItem('Past Events')}
                {this.renderSubMenuItem('Upcoming Events')}
                {this.renderSubMenuItem('Create New Event')}
              </List>
            </Collapse>
          </List>
        </div>
      )
    }
  }
)
