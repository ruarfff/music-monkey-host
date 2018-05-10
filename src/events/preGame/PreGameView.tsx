import PersonPinIcon from '@material-ui/icons/PlaylistPlay'
import AppBar from 'material-ui/AppBar'
import { Theme, withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import lifecycle from 'react-pure-lifecycle'
import SwipeableViews from 'react-swipeable-views'
import IAction from '../../Action'
import IEvent from '../IEvent'
import PreGamePlaylist from './PreGamePlaylist'

interface IPreGameViewProps {
  event: IEvent
  preGameTabIndex: number
  onPreGameTabIndexChange(): IAction
}

const decorate = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  }
}))

const componentDidMount = (props: IPreGameViewProps) => {
  
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const PreGameView = decorate<IPreGameViewProps>(
  ({ theme, classes, event, preGameTabIndex, onPreGameTabIndexChange }) => {
    const safeTheme = theme || ({} as Theme)
    if (event.playlist) {
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={preGameTabIndex}
              onChange={onPreGameTabIndexChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable={true}
              scrollButtons="auto"
            >
              <Tab label="Event Playlist" icon={<PersonPinIcon />} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={safeTheme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={preGameTabIndex}
            onChangeIndex={onPreGameTabIndexChange}
          >
            <TabContainer dir={safeTheme.direction}>
              <PreGamePlaylist playlist={event.playlist} />
            </TabContainer>
          </SwipeableViews>
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
  componentDidMount
})(PreGameView)
