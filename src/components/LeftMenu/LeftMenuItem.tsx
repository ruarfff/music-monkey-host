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
import SubMenuIcon from '../../assets/submenu-icon.svg'

const decorate = withStyles(({}) => ({
  listItemText: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px'
  },
  listItem: {
    color: 'white',
  },
  highlightedListItem: {
    '&:before': {
      content: '""',
      background: '#49cdd8',
      position: 'absolute',
      padding: '2px',
      height: '100%',
      left: 0,
    },
  },
  subItemText: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '12px'
  },
  subListItem: {
    paddingLeft: '78px',
  },
  collapse: {
    background: '#363b77',
  }
}))

interface ICollapsedList {
  text: string
  link: string
}

interface ILeftMenuItemProps {
  text?: string
  pathName?: string
  icon?: string
  collapsed?: boolean
  collapsedList?: ICollapsedList[]
  currentPath?: string
}

class LeftMenuItem extends React.Component<ILeftMenuItemProps &
  WithStyles<
    'listItemText' |
    'listItem' |
    'subItemText' |
    'subListItem' |
    'highlightedListItem' |
    'collapse'
    >
  > {

  public state = {
    isOpen: false,
  }

  public handleToggleDropdown = () => {
    this.setState({isOpen: !this.state.isOpen})
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
    const { classes, pathName, currentPath, text, icon, collapsed, collapsedList } = this.props
    const { isOpen } = this.state

    return (
      <React.Fragment>
        <ListItem
          className={pathName === currentPath ? classes.highlightedListItem : classes.listItem}
          button={true}
          onClick={this.handleToggleDropdown}
          selected={pathName === currentPath && true}
        >
          <ListItemIcon>
            <img src={icon}/>
          </ListItemIcon>
          <ListItemText
            inset={true}
            disableTypography={true}
            primary={
              <Typography className={classes.listItemText}>
                {text}
              </Typography>
            }
          />
          {
            collapsed ? (isOpen ?
              <ExpandLess color="inherit" /> :
              <ExpandMore color="inherit" />) : ''
          }
        </ListItem>
        {
          collapsed ?
            <Collapse
              in={isOpen}
              timeout="auto"
              unmountOnExit={true}
              className={classes.collapse}
            >
              <List component="div" disablePadding={true}>
                {collapsedList && collapsedList.map((item, i) =>
                  <Link key={i} to={item.link}>
                    {this.renderSubMenuItem(item.text)}
                  </Link>
                )}
              </List>
            </Collapse> : ''
        }
      </React.Fragment>
    )
  }
}

export default decorate(LeftMenuItem)