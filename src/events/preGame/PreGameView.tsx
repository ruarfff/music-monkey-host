import AppBar from 'material-ui/AppBar'
import { Theme, withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import IAction from '../../Action'
import IEvent from '../IEvent'

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

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const PreGameView = decorate<IPreGameViewProps>(
  ({ theme, classes, preGameTabIndex, onPreGameTabIndexChange }) => {
    const safeTheme = theme || ({} as Theme)
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
            <Tab label="Event Playlist" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={safeTheme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={preGameTabIndex}
          onChangeIndex={onPreGameTabIndexChange}
        >
          <TabContainer dir={safeTheme.direction}>A</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
)

export default PreGameView
