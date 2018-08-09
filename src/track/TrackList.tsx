import * as React from 'react'
import ITrack from './ITrack'
import TrackListItem from './TrackListItem'

// TODO:  use this: https://codepen.io/dmarcus/pen/vKdWxW
// Also this for styles: https://codepen.io/ArnaudBalland/pen/vGZKLr
interface ITrackListProps {
  tracks: ITrack[]
  onTrackSelected?: ((track: ITrack) => void)
}

const TrackList = ({
  tracks,
  onTrackSelected = (track: ITrack) => ({} as any)
}: ITrackListProps) => (
  <React.Fragment>
    {tracks.map((track, i) => (
      <TrackListItem key={i} track={track} onTrackSelected={onTrackSelected} />
    ))}
  </React.Fragment>
)

export default TrackList
