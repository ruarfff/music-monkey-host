import AppBar from '@material-ui/core/AppBar/AppBar'
import { Theme } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import * as React from 'react'
import lifecycle from 'react-pure-lifecycle'
import SwipeableViews from 'react-swipeable-views'
import IAction from '../../Action'
import IEvent from '../IEvent'
import IPregameSuggestion from './IPregameSuggestion'
import PreGamePlaylist from './PreGamePlaylistContainer'
import UserSuggestionsView from './UserSuggestionsViewContainer'

interface IPreGameViewProps {
  event: IEvent
  preGameTabIndex: number
  suggestions: IPregameSuggestion[]
  onPreGameTabIndexChange(index: number): IAction
  fetchPreGameSuggestion(eventId: string): IAction
}

const decorate = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  }
}))

const componentDidUpdate = (
  props: IPreGameViewProps,
  prev: IPreGameViewProps
) => {
  if (props.event && !prev.event) {
    const eventId = props.event.eventId || ''
    props.fetchPreGameSuggestion(eventId)
  }
}

const componentDidMount = (props: IPreGameViewProps) => {
  if (props.event) {
    const eventId = props.event.eventId || ''
    props.fetchPreGameSuggestion(eventId)
  }
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const handleTabChange = (props: IPreGameViewProps) => (
  event: any,
  index: number
) => {
  props.onPreGameTabIndexChange(index)
}

const PreGameView = decorate<IPreGameViewProps>(
  ({
    theme,
    classes,
    event,
    suggestions,
    preGameTabIndex,
    onPreGameTabIndexChange
  }) => {
    const safeTheme = theme || ({} as Theme)
    if (event.playlist) {
      return (
        <div className={classes.root}>
          {suggestions && (
            <div>
              <AppBar position="static" color="default">
                <Tabs
                  value={preGameTabIndex}
                  onChange={handleTabChange({
                    onPreGameTabIndexChange
                  } as IPreGameViewProps)}
                  indicatorColor="primary"
                  textColor="primary"
                  scrollable={true}
                  scrollButtons="auto"
                >
                  <Tab label="Event Playlist" icon={<PlaylistPlayIcon />} />
                  {suggestions.map((suggestion, i) => (
                    <Tab
                      key={i}
                      label={suggestion.user.displayName}
                      icon={<PersonPinIcon />}
                    />
                  ))}
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={safeTheme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={preGameTabIndex}
                onChangeIndex={onPreGameTabIndexChange}
              >
                <TabContainer dir={safeTheme.direction}>
                  <PreGamePlaylist />
                </TabContainer>

                {suggestions.map((suggestion, i) => (
                  <TabContainer key={i} dir={safeTheme.direction}>
                    <UserSuggestionsView />
                  </TabContainer>
                ))}
              </SwipeableViews>
            </div>
          )}
          {!suggestions && <p>No suggestion yet</p>}
        </div>
      )
    } else {
      return (
        <h3>
          There seems to be an issue with this Event. It does not have a
          playlist.
        </h3>
      )
    }
  }
)

export default lifecycle({
  componentDidUpdate,
  componentDidMount
})(PreGameView)
