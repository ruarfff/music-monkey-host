import * as React from 'react'
import IAction from '../../IAction'
import { INotification } from '../../notification/notificationInitialState'
import './NotificationPopupStyles.scss'
import { Link } from 'react-router-dom'

interface INotificationPopupProps {
  notifications: INotification[]
  updateNotification(notification: INotification): IAction
}

class NotificationPopup extends React.Component<INotificationPopupProps> {
  public render() {
    const { notifications } = this.props
    const filteredNotifications = notifications.filter(n => n.status !== 'Actioned')
    return (
      <div className='notificationWrapper'>
        {
          filteredNotifications.length > 0 ? filteredNotifications.map((notification: INotification, index: number) => (
            <div
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
            </div>
          )) :
          <div
            className='notificationItemWrapper'
          >
            <span className='notificationItemText'>
              No notifications
            </span>
          </div>
        }
      </div>
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
  }
}

export default NotificationPopup