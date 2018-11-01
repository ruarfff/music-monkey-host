import * as React from 'react'
import IAction from '../../IAction'
import { INotification } from '../../notification/notificationInitialState'
import './NotificationPopupStyles.scss'

interface INotificationPopupProps {
  notifications: INotification[]
  actionedNotification(index: number): IAction
  readNotification(index: number): IAction
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
              onClick={this.handleClickNotification(index, notification)}
              onMouseEnter={this.handleHoverNotification(index, notification.status, notification)}
            >
              <span className='notificationItemText'>
                {notification.text}
              </span>
              <span className='notificationItemLink'>
                {notification.context}
              </span>
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

  private handleHoverNotification = (index: number, status: string, notification: INotification) => () => {
    if (status !== 'Read') {
      this.props.readNotification(index)
      this.props.updateNotification({
        ...notification,
        status: 'Read'
      })
    }
  }

  private handleClickNotification = (index: number, notification: INotification) => () => {
    this.props.actionedNotification(index)
    this.props.updateNotification({
      ...notification,
      status: 'Actioned'
    })
  }
}

export default NotificationPopup