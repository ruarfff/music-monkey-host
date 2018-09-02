import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import FavouriteIcon from '@material-ui/icons/FavoriteBorder'
import * as React from 'react'
import ITrack from './ITrack'
import './TrackListItem.css'

// TODO:  use this: https://codepen.io/dmarcus/pen/vKdWxW
// Also this for styles: https://codepen.io/ArnaudBalland/pen/vGZKLr

interface ITrackListItemProps {
  track: ITrack
  withVoting: boolean
  currentUserVoted: boolean
  numberOfVotes: number
  onVote: ((track: ITrack) => void)
  onTrackSelected: ((track: ITrack) => void)
}

const TrackListItem = ({
  track,
  withVoting,
  currentUserVoted,
  numberOfVotes,
  onVote,
  onTrackSelected
}: ITrackListItemProps) => {
  if (!track) {
    return <span />
  }
  const handleTrackSelected = () => {
    onTrackSelected(track)
  }

  const handleTrackVote = () => {
    onVote(track)
  }

  let trackImage = <span />
  if (track.album && track.album.images && track.album.images.length > 0) {
    trackImage = (
      <img
        src={track.album.images[track.album.images.length - 1].url}
        alt={track.name}
      />
    )
  }
  let votingButton = <span />
  if (withVoting) {
    votingButton = (
      <IconButton aria-label="Vote" onClick={handleTrackVote}>
        <Badge
          badgeContent={numberOfVotes}
          color="primary"
          className="TrackListItem-voting"
        >
          <FavouriteIcon />
        </Badge>
      </IconButton>
    )
  }

  return (
    <ListItem dense={true} button={true} onClick={handleTrackSelected}>
      {trackImage}
      <ListItemText primary={track.name} />
      {votingButton}
    </ListItem>
  )
}

export default TrackListItem
