import * as React from 'react'
import IAction from '../../IAction'
import { INotification } from '../../notification/notificationInitialState'
import './NotificationPopupStyles.scss'
import { Link } from 'react-router-dom'

interface INotificationPopupProps {
  notifications: INotification[]
  actionedNotification(id: string): IAction
  readNotification(id: string): IAction
  updateNotification(notification: INotification): IAction
}

class NotificationPopup extends React.Component<INotificationPopupProps> {
  public render() {
    const { notifications } = this.props
    const filteredNotifications = notifications.filter(n => n.status !== 'Actioned')
    console.log(filteredNotifications)
    return (
      <div className='notificationWrapper'>
        {
          filteredNotifications.length > 0 ? filteredNotifications.map((notification: INotification, index: number) => (
            <Link key={index} to={`/events/${notification.contextId}`}>
              <div
                className={notification.status === 'Read' ?
                  'notificationItemWrapper notificationItemWrapperHighlighted' :
                  'notificationItemWrapper'
                }
                onClick={this.handleClickNotification(notification)}
                onMouseEnter={this.handleHoverNotification(notification.status, notification)}
              >
                <span className='notificationItemText'>
                  {notification.content}
                </span>
                <span className='notificationItemLink'>
                  {notification.context}
                </span>
              </div>
            </Link>
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
      this.props.readNotification(notification.notificationId)
      this.props.updateNotification({
        ...notification,
        status: 'Read'
      })
    }
  }

  private handleClickNotification = (notification: INotification) => () => {
    this.props.actionedNotification(notification.notificationId)
    this.props.updateNotification({
      ...notification,
      status: 'Actioned'
    })
  }
}

export default NotificationPopup