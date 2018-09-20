import List from '@material-ui/core/List'
import * as React from 'react'
import { Link } from 'react-router-dom'
import EventIcon from '../assets/event-icon.svg'
import HomeIcon from '../assets/home-icon.svg'
import logo from '../assets/logo-home.svg'
import LeftMenuItem from './LeftMenuItem'

interface IMainAppLeftMenuProps {
  path: string
}

class MainAppLeftMenu extends React.Component<IMainAppLeftMenuProps> {

  public render() {
    const { path } = this.props

    const eventsList = [
      {
        text: 'Past Events',
        link: '/events/past'
      },
      {
        text: 'Upcoming Events',
        link: '/events/upcoming'
      },
      {
        text: 'All Events',
        link: '/events/all'
      },
      {
        text: 'Create New Event',
        link: '/create-event'
      },
    ]

    return (
      <div className="Home-left-menu-wrapper">
        <div className="Home-left-menu">
          <div className="Home-logo-container">
            <img src={logo} alt=""/>
          </div>
          <List>
            <Link to={'/'}>
              <LeftMenuItem
                text={'Home'}
                pathName={'/'}
                currentPath={path}
                icon={HomeIcon}
                collapsed={false}
              />
            </Link>
            <LeftMenuItem
              text={'Events'}
              currentPath={path}
              icon={EventIcon}
              collapsed={true}
              collapsedList={eventsList}
            />
          </List>
        </div>
      </div>
    )
  }
}

export default MainAppLeftMenu