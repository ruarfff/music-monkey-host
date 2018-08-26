import { fetchEventGuests } from '../guest/guestClient'
import IPlaylist from '../playlist/IPlaylist'
import IPlaylistQuery from '../playlist/IPlaylistQuery'
import parsePlaylistUrl from '../playlist/parsePlaylistUrl'
import { fetchPlaylist } from '../playlist/playlistClient'
import IEvent from './IEvent'

const defaultEventImage = '/img/partycover-sm.png'

export default class EventDecorator {
  public getEventPlaylist = (event: IEvent): Promise<IPlaylist> => {
    const playlistQuery: IPlaylistQuery | undefined = parsePlaylistUrl(
      event.playlistUrl
    )
    if (playlistQuery) {
      return fetchPlaylist(playlistQuery.playlistId)
    } else {
      return Promise.reject(new Error('Invalid Playlist Url'))
    }
  }

  public decorateEvent = async (event: IEvent) => {
    let decoratedEvent: IEvent = await this.decorateEventWithPlaylist(event)
    decoratedEvent = await this.decorateEventWithGuests(decoratedEvent)
    return decoratedEvent
  }

  public decorateEvents = (events: IEvent[]) => {
    return Promise.all(events.map(this.decorateEvent))
  }

  private decorateEventWithPlaylist = async (event: IEvent) => {
    try {
      const playlist = await this.getEventPlaylist(event)
      let imageUrl = event.imageUrl
      if (!imageUrl) {
        imageUrl =
          playlist.images && playlist.images.length > 0
            ? playlist.images[0].url
            : defaultEventImage
      }
      return { ...event, imageUrl, playlist: playlist as IPlaylist } as IEvent
    } catch (err) {
      console.error(err)
      return {
        ...event,
        imageUrl: event.imageUrl ? event.imageUrl : defaultEventImage
      } as IEvent
    }
  }

  private decorateEventWithGuests = async (event: IEvent) => {
    try {
      const guests = await fetchEventGuests(event)
      return { ...event, guests }
    } catch (err) {
      console.error(err)
    }
    return { ...event }
  }
}
