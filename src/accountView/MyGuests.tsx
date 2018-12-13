import * as React from 'react'
import IEvent from '../event/IEvent'
// import EventCard from '../event/EventCard'

interface IMyPlaylistsProps {
  events: IEvent[]
}

class MyPlaylists extends React.PureComponent<IMyPlaylistsProps> {
  public render() {
    return (
      <>
        {/*{*/}
          {/*this.props.events.map((event, key) =>*/}
            {/*<EventCard event={event} key={key}/>*/}
          {/*)*/}
        }
      </>
    )
  }
}

export default MyPlaylists