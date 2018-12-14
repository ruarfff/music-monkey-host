import Avatar from '@material-ui/core/Avatar/Avatar'
import { AccountCircle } from '@material-ui/icons'
import { flattenDeep, uniqBy } from 'lodash'
import * as React from 'react'
import IEvent from '../event/IEvent'
import IEventGuest from '../event/IEventGuest'

interface IMyPlaylistsProps {
  events: IEvent[]
}

class MyPlaylists extends React.PureComponent<IMyPlaylistsProps> {

  public renderGuests = (guest: IEventGuest, key: number) => {
    return (
      <div key={key} className='guestWrapper'>
        {guest.user.image &&
          <Avatar
            alt={guest.user.displayName}
            src={guest.user.image}
          />
        }
        {!guest.user.image && <AccountCircle />}
        <div>
          {guest.user.displayName}
        </div>
      </div>
    )
  }

  public render() {
    const { events } = this.props
    const guests = uniqBy(flattenDeep(events.map((event) => event.guests)), 'userId')

    return (
      <>
        <div className='guestsContainer'>
          {
            guests.length > 0 ? guests.map((guest, key) => {
              if (guest) {
                return this.renderGuests(guest, key)
              } else {
                return
              }
            }) :
            <div>
              You don't have any guests
            </div>
          }
        </div>
      </>
    )
  }
}

export default MyPlaylists