import AppBar from '@material-ui/core/AppBar/AppBar'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { groupBy } from 'lodash'
import * as Pusher from 'pusher-js'
import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import IUser from '../user/IUser'
import PreGamePlaylist from './PreGamePlaylist'
import UserSuggestionsView from './UserSuggestionsView'

interface IPreGameViewProps {
  event: IEvent
  preGameTabIndex: number
  suggestions: IDecoratedSuggestion[]
  acceptedSuggestionsByTrackUri: Map<string, IDecoratedSuggestion>
  saving: boolean
  onPreGameTabIndexChange(index: number): IAction
  getEventSuggestions(eventId: string): IAction
  acceptSuggestedTracks(suggestions: IDecoratedSuggestion[]): IAction
  savePreGamePlaylist(
    event: IEvent,
    acceptedSuggestionsByTrackUri: Map<string, IDecoratedSuggestion>
  ): IAction
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

export default class PreGameView extends React.PureComponent<
  IPreGameViewProps
> {
  public componentDidUpdate(prevProps: IPreGameViewProps) {
    if (this.props.event.eventId !== prevProps.event.eventId) {
      const eventId = this.props.event.eventId || ''
      this.props.getEventSuggestions(eventId)
    }
  }

  public componentDidMount() {
    if (this.props.event) {
      const eventId = this.props.event.eventId || ''
      this.props.getEventSuggestions(eventId)
      const pusher = new Pusher('d7c284d8f17d26f74047', {
        cluster: 'eu',
        encrypted: true
      })

      const channel = pusher.subscribe('mm-suggestions-' + eventId)
      channel.bind('suggestion-saved', data => {
        this.props.getEventSuggestions(eventId)
      })
    }
  }

  public render() {
    const {
      acceptedSuggestionsByTrackUri,
      event,
      onPreGameTabIndexChange,
      preGameTabIndex,
      saving,
      suggestions
    } = this.props
    const suggestionsGroupedByUserId = groupBy(suggestions, 'user.userId')

    return (
      <div>
        {event.playlist && (
          <div>
            <AppBar position="static" color="default">
              <Tabs
                value={preGameTabIndex}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable={true}
                scrollButtons="auto"
              >
                <Tab label="Event Playlist" icon={<PlaylistPlayIcon />} />
                {suggestionsGroupedByUserId &&
                  this.renderSuggestionTabs(suggestionsGroupedByUserId)}
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis="x"
              index={preGameTabIndex}
              onChangeIndex={onPreGameTabIndexChange}
            >
              <TabContainer dir="ltr">
                <PreGamePlaylist
                  event={event}
                  saving={saving}
                  acceptedSuggestionsByTrackUri={acceptedSuggestionsByTrackUri}
                  onSavePreGamePlaylist={this.handleSaveEventPlaylist}
                />
              </TabContainer>
              {suggestionsGroupedByUserId &&
                this.renderSuggestionTabContent(suggestionsGroupedByUserId)}
            </SwipeableViews>
          </div>
        )}
      </div>
    )
  }

  private handleTabChange = (notUsed: any, index: number) => {
    this.props.onPreGameTabIndexChange(index)
  }

  private renderSuggestionTabs = (suggestionsGroupedByUserId: any) => {
    return Object.values(suggestionsGroupedByUserId)
      .map(userSuggestions => userSuggestions[0].user)
      .map(user => (
        <Tab
          key={user.userId}
          label={user.displayName}
          icon={<PersonPinIcon />}
        />
      ))
  }

  private handleSaveEventPlaylist = () => {
    this.props.savePreGamePlaylist(
      this.props.event,
      this.props.acceptedSuggestionsByTrackUri
    )
  }

  private renderSuggestionTabContent = (suggestionsGroupedByUserId: any) => {
    return Object.keys(suggestionsGroupedByUserId).map(userId => {
      const suggestions: IDecoratedSuggestion[] =
        suggestionsGroupedByUserId[userId]
      const user: IUser = suggestions[0].user
      const suggestionsFilteredByAccepted = suggestions.filter(
        (suggestion: IDecoratedSuggestion) =>
          !this.props.acceptedSuggestionsByTrackUri.has(suggestion.track.uri)
      )

      return (
        <TabContainer key={userId} dir="ltr">
          <UserSuggestionsView
            user={user}
            suggestions={suggestionsFilteredByAccepted}
            onAcceptSuggestions={this.props.acceptSuggestedTracks}
          />
        </TabContainer>
      )
    })
  }
}
