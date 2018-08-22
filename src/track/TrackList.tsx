import * as React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
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
  onDragEnd?: ((result: any) => void)
}

const getItemStyle = (isDragging: any, draggableStyle: any) => {
  if (isDragging) {
    return {
      background: 'lightgreen',
      ...draggableStyle
    }
  } else {
    return { ...draggableStyle }
  }
}

const getListStyle = (isDraggingOver: any) => {
  if (isDraggingOver) {
    return { background: 'lightblue' }
  }
  return {}
}

const TrackList = ({
  tracks = [],
  withVoting = false,
  votes = new Map(),
  onVote = (t: ITrack) => ({} as any),
  onTrackSelected = (t: ITrack) => ({} as any),
  onDragEnd = (result: any) => ({} as any)
}: ITrackListProps) => (
  <React.Fragment>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
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
                <Draggable key={i} draggableId={trackId} index={i}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      style={getItemStyle(
                        draggableSnapshot.isDragging,
                        draggableProvided.draggableProps.style
                      )}
                    >
                      <TrackListItem
                        track={track}
                        withVoting={withVoting}
                        currentUserVoted={userVoted}
                        numberOfVotes={numberOfVotes}
                        onTrackSelected={onTrackSelected}
                        onVote={onVote}
                      />
                    </div>
                  )}
                </Draggable>
              )
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </React.Fragment>
)

export default TrackList
