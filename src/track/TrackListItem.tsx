import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import * as React from 'react'
import ITrack from './ITrack'

// TODO:  use this: https://codepen.io/dmarcus/pen/vKdWxW
// Also this for styles: https://codepen.io/ArnaudBalland/pen/vGZKLr

interface ITrackListItemProps {
  track: ITrack
  onTrackSelected?: ((track: ITrack) => void)
}

const TrackListItem = ({
  track,
  onTrackSelected = (t: ITrack) => ({} as any)
}: ITrackListItemProps) => {
  let trackImage = <span />
  if (track.album && track.album.images && track.album.images.length > 0) {
    trackImage = (
      <img
        src={track.album.images[track.album.images.length - 1].url}
        alt={track.name}
      />
    )
  }

  const handleTrackSelected = () => {
    onTrackSelected(track)
  }

  return (
    <ListItem dense={true} button={true} onClick={handleTrackSelected}>
      {trackImage}
      <ListItemText primary={track.name} />
    </ListItem>
  )
}

export default TrackListItem
