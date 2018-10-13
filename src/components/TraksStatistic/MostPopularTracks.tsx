import Paper from '@material-ui/core/Paper'
import * as _ from 'lodash'
import * as React from 'react'
import IEvent from '../../event/IEvent'
import ITrack from '../../track/ITrack'
import './MostPopularTracks.css'

interface IMostPopularTracksProps {
  events: IEvent[]
}

class MostPopularTracks extends React.Component<IMostPopularTracksProps> {
  public render() {
    const { events } = this.props

    const popularTraks = _.sortBy(
      _.uniqBy(
        _.flattenDeep(
          events.map(
            event =>
              event.playlist &&
              event.playlist.tracks.items.map(track => track.track)
          )
        ),
        'uri'
      ),
      'popularity'
    )
    return (
      <Paper>
        <span className={'title'}>Most Popular Tracks</span>
        <div className="listWrapper">
          {popularTraks &&
            popularTraks
              .reverse()
              .slice(0, 5)
              .map((track: ITrack, i) => (
                <div key={i} className={'listItem'}>
                  <div className={'imgSection'}>
                    <img
                      className={'trackImg'}
                      src={track.album.images[0].url}
                    />
                  </div>
                  <div className={'trackNumber'}>{i + 1 + '. '}</div>
                  <div className={'nameSection'}>
                    <span>{track.name}</span>
                    <span className="artistName">
                      {track.album.artists[0].name}
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </Paper>
    )
  }
}

export default MostPopularTracks
