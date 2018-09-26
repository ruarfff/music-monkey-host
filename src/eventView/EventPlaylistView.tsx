import AppBar from '@material-ui/core/AppBar/AppBar'
import Grid from '@material-ui/core/Grid/Grid'
import { WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'
import IEvent from '../event/IEvent'
import EventPlaylist from '../eventPlaylist/EventPlaylistContainer'
import EventPlaylistSummary from '../eventPlaylist/EventPlaylistSummaryContainer'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import './EventPlaylistView.css'
import EventRejectedSuggestions from './EventRejectedSuggestionsContainer'
import EventSuggestions from './EventSuggestionsContainer'

const decorate = withStyles(() => ({
  tabsWrapper: {
    padding: '25px!important'
  }
}))

interface IEventPlaylistViewState {
  tabIndex: number
}

interface IEventPlaylistViewProps {
  event: IEvent
  acceptedSuggestions: IDecoratedSuggestion[]
  stagedSuggestions: IDecoratedSuggestion[]
  pendingSuggestions: IDecoratedSuggestion[]
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  )
}

class EventPlaylistView extends React.Component<
  IEventPlaylistViewProps & WithStyles,
  IEventPlaylistViewState
> {
  public state = {
    tabIndex: 0
  }

  public render() {
    const { tabIndex } = this.state
    const { classes } = this.props
    return (
      <Grid container={true} spacing={24}>
        <Grid item={true} sm={12}>
          <EventPlaylistSummary />
        </Grid>
        <Grid className={classes.tabsWrapper} item={true} sm={12}>
          <AppBar position="static" color="default">
            <Tabs
              value={tabIndex}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab
                label="Event Playlist"
              />
              <Tab label="Suggested"/>
              <Tab label="Rejected" />
            </Tabs>
          </AppBar>
          {tabIndex === 0 && (
            <TabContainer dir={'x'}>
              <EventPlaylist />
            </TabContainer>
          )}
          {tabIndex === 1 && (
            <TabContainer dir={'x'}>
              <EventSuggestions />
            </TabContainer>
          )}
          {tabIndex === 2 && (
            <TabContainer dir={'x'}>
              <EventRejectedSuggestions />
            </TabContainer>
          )}
        </Grid>
      </Grid>
    )
  }

  private handleTabChange = (event: any, index: number) => {
    this.setState({ tabIndex: index })
  }
}

export default decorate(EventPlaylistView)
