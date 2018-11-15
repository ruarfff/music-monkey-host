import AppBar from '@material-ui/core/AppBar/AppBar'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid/Grid'
import { WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab/Tab'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'
import EventSearchTracksContainer from '../../../components/SearchTracks/EventSearchTracksContainer'
import IEvent from '../../../event/IEvent'
import EventPlaylist from '../../../eventPlaylist/EventPlaylistContainer'
import EventPlaylistSummary from '../../../eventPlaylist/EventPlaylistSummaryContainer'
import IDecoratedSuggestion from '../../../suggestion/IDecoratedSuggestion'
// import EventCohostPlaylist from './EventCohostPlaylistContainer'
import EventRejectedSuggestions from './EventRejectedSuggestionsContainer'
import EventSuggestions from './EventSuggestionsContainer'
import './Styles/EventPlaylistView.scss'

const decorate = withStyles(() => ({
  tabsWrapper: {
    padding: '25px!important'
  },
  suggestions: {
    right: '-20px!important'
  }
}))

interface IEventPlaylistViewProps {
  event: IEvent
  acceptedSuggestions: IDecoratedSuggestion[]
  stagedSuggestions: IDecoratedSuggestion[]
  pendingSuggestions: IDecoratedSuggestion[]
}

function TabContainer({ children, dir }: any) {
  return (
    <Typography
      component="div"
      dir={dir}
    >
      {children}
    </Typography>
  )
}

class EventPlaylistView extends React.Component<
  IEventPlaylistViewProps & WithStyles
> {
  public state = {
    tabIndex: 0
  }

  public render() {
    const { tabIndex } = this.state
    const { classes, pendingSuggestions } = this.props
    // const cohost = true
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
              indicatorColor="secondary"
              textColor="secondary"
              fullWidth={true}
            >
              <Tab label="Event Playlist"/>
              <Tab label={
                pendingSuggestions.length ? <Badge badgeContent={pendingSuggestions.length} color={'secondary'} className={classes.suggestions}>
                  Suggested
                </Badge> : 'Suggested'
              }/>
              <Tab label="Rejected" />
              <Tab label="Add track" />
              {/*{cohost && <Tab label="Cohost tracks" />}*/}
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
          {tabIndex === 3 && (
            <TabContainer dir={'x'}>
              <EventSearchTracksContainer />
            </TabContainer>
          )}
          {/*{(tabIndex === 6 && cohost) && (*/}
          {/*<TabContainer dir={'x'}>*/}
          {/*<EventCohostPlaylist />*/}
          {/*</TabContainer>*/}
          {/*)}*/}
        </Grid>
      </Grid>
    )
  }

  private handleTabChange = (event: any, index: number) => {
    this.setState({ tabIndex: index })
  }
}

export default decorate(EventPlaylistView)
