import * as React from 'react'
import './NotificationPopupStyles.scss'

interface INotificationPopupProps {

}

const data = [
  {
    userId: 'host-userId',
    type: 'rsvp',
    context: 'event',
    contextId: 'eventId',
    text: 'Some Person is going to Event X.',
    status: 'Unread'
  },
  {
    userId: 'host-userId',
    type: 'rsvp',
    context: 'event',
    contextId: 'eventId',
    text: 'Some Person is going to Event X.',
    status: 'Unread'
  },
  {
    userId: 'host-userId',
    type: 'rsvp',
    context: 'event',
    contextId: 'eventId',
    text: 'Some Person is going to Event X.',
    status: 'Unread'
  }
]

class NotificationPopup extends React.Component<INotificationPopupProps> {
  public render() {
    return (
      <div className='notificationWrapper'>
        {
          data ? data.map(notification => (
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