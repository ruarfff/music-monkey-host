import { withStyles } from '@material-ui/core/styles'
import * as React from 'react'
import ITrack from './ITrack'
import TrackListItem from './TrackListItem'

// TODO:  use this: https://codepen.io/dmarcus/pen/vKdWxW
// Also this for styles: https://codepen.io/ArnaudBalland/pen/vGZKLr

const decorate = withStyles(({}) => ({}))

interface ITrackListProps {
  tracks: ITrack[]
  onTrackSelected?: ((track: ITrack) => void)
}

const TrackList = decorate<ITrackListProps>(
  ({ classes, tracks, onTrackSelected = (track: ITrack) => ({} as any) }) => (
    <React.Fragment>
      {tracks.map((track, i) => (
        <TrackListItem
          key={i}
          track={track}
          onTrackSelected={onTrackSelected}
        />
      ))}
    </React.Fragment>
  )
)

export default TrackList
