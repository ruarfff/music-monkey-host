import * as React from 'react'
import ITrackVoteStatus from '../vote/ITrackVoteStatus'
import ITrack from './ITrack'
import TrackListItem from './TrackListItem'

// TODO:  use this: https://codepen.io/dmarcus/pen/vKdWxW
// Also this for styles: https://codepen.io/ArnaudBalland/pen/vGZKLr

interface ITrackListProps {
  tracks: ITrack[]
  withVoting?: boolean
  votes?: Map<string, ITrackVoteStatus>
  onVote?: ((track: ITrack) => void)
  onTrackSelected?: ((track: ITrack) => void)
}

const TrackList = ({
  tracks = [],
  withVoting = false,
  votes = new Map(),
  onVote = (t: ITrack) => ({} as any),
  onTrackSelected = (t: ITrack) => ({} as any)
}: ITrackListProps) => (
  <React.Fragment>
    {tracks.map((track, i) => {
      const trackId = track.uri
      let numberOfVotes = 0
      let userVoted = false
      if (votes && votes.has(trackId)) {
        const voteStatus: ITrackVoteStatus =
          votes.get(trackId) || ({} as ITrackVoteStatus)
        numberOfVotes = voteStatus.numberOfVotes
        userVoted = voteStatus.votedByCurrentUser
      }

      return (
        <TrackListItem
          key={i}
          track={track}
          withVoting={withVoting}
          currentUserVoted={userVoted}
          numberOfVotes={numberOfVotes}
          onTrackSelected={onTrackSelected}
          onVote={onVote}
        />
      )
    })}
  </React.Fragment>
)

export default TrackList
