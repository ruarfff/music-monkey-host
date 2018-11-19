import * as React from 'react'
import IAction from '../../IAction'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { INotification } from '../../notification/notificationInitialState'
import './NotificationPopupStyles.scss'
import { Link } from 'react-router-dom'

interface INotificationPopupProps {
  showNotification: boolean
  notifications: INotification[]
  updateNotification(notification: INotification): IAction
  toggleNotification(): void
}

class NotificationPopup extends React.Component<INotificationPopupProps> {
  public render() {
    const { notifications, showNotification, toggleNotification } = this.props
    const filteredNotifications = notifications.filter(n => n.status !== 'Actioned')
    return (
      <Menu
        aria-owns={open ? 'menu-notification' : undefined}
        aria-haspopup="true"
        open={showNotification}
        className='notificationWrapper'
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        onClose={toggleNotification}
      >
        {
          filteredNotifications.length > 0 ? filteredNotifications.map((notification: INotification, index: number) => (
            <MenuItem
              key={index}
              className={notification.status === 'Read' ?
                'notificationItemWrapper notificationItemWrapperHighlighted' :
                'notificationItemWrapper'
              }
            >
              <Link
                onClick={this.handleClickNotification(notification)}
                onMouseEnter={this.handleHoverNotification(notification.status, notification)}
                to={`/events/${notification.contextId}`}
              >
                <span className='notificationItemText'>
                  {notification.content}
                </span>
                <span className='notificationItemLink'>
                  {notification.context}
                </span>
              </Link>
            </MenuItem>
          )) :
          <MenuItem
            className='notificationItemWrapper'
          >
            <span className='notificationItemText'>
              No notifications
            </span>
          </MenuItem>
        }
      </Menu>
    )
  }

  private handleHoverNotification = (status: string, notification: INotification) => () => {
    if (status !== 'Read') {
      this.props.updateNotification({
        ...notification,
        status: 'Read'
      })
    }
  }

  private handleClickNotification = (notification: INotification) => () => {
    this.props.updateNotification({
      ...notification,
      status: 'Actioned'
    })
    this.props.toggleNotification()
  }
}

export default NotificationPopup