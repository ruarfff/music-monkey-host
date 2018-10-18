import * as React from 'react'
import './NotificationPopupStyles.scss'
import { INotification } from '../../notification/notificationInitialState'

interface INotificationPopupProps {
  notifications: INotification[]
}

class NotificationPopup extends React.Component<INotificationPopupProps> {
  public render() {
    const { notifications } = this.props
    return (
      <div className='notificationWrapper'>
        {
          notifications ? notifications.map((notification: INotification) => (
            <div
              className='notificationItemWrapper'
              onClick={this.handleClickNotification}
              onMouseEnter={this.handleHoverNotification}
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
            onClick={this.handleClickNotification}
            onMouseEnter={this.handleHoverNotification}
          >
            <span className='notificationItemText'>
              No notifications
            </span>
          </div>
        }
      </div>
    )
  }

  private handleHoverNotification = (e: any) => {
    e.target.classList.add('notificationItemWrapperHighlighted')
  }

  private handleClickNotification = (e: any) => {
    e.target.style.display = 'none'
  }
}

export default NotificationPopup