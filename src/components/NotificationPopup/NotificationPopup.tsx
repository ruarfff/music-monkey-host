import * as React from 'react'
import IAction from '../../IAction'
import { INotification } from '../../notification/notificationInitialState'
import './NotificationPopupStyles.scss'

interface INotificationPopupProps {
  notifications: INotification[]
  actionedNotification(index: number): IAction
  readNotification(index: number): IAction
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
            <div
              key={index}
              className={notification.status === 'Read' ?
                'notificationItemWrapper notificationItemWrapperHighlighted' :
                'notificationItemWrapper'
              }
              onClick={() => this.handleClickNotification(index)}
              onMouseEnter={() => this.handleHoverNotification(index, notification.status)}
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

  private handleHoverNotification = (index: number, status: string) => {
    if (status !== 'Read') {
      this.props.readNotification(index)
    }
  }

  private handleClickNotification = (index: number) => {
    console.log(index)
    this.props.actionedNotification(index)
  }
}

export default NotificationPopup