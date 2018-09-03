import Grid from '@material-ui/core/Grid/Grid'
import * as React from 'react'
import IEvent from '../event/IEvent'
import EventDetails from './EventDetailsContainer'
import EventGuests from './EventGuestsContainer'
import EventSummaryPlaylist from './EventSummaryPlaylistContainer'
import './EventSummaryView.css'

interface IEventSummaryViewProps {
  event: IEvent
}

export default class EventSummaryView extends React.PureComponent<
  IEventSummaryViewProps
> {
  public render() {
    return (
      <Grid container={true} spacing={24}>
        <Grid container={true} item={true} xs={12}>
          <Grid container={true} spacing={24} item={true} xs={12} sm={8}>
            <Grid item={true} xs={12}>
              <EventDetails />
            </Grid>
            <Grid item={true} xs={12}>
              <EventSummaryPlaylist />
            </Grid>
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <EventGuests />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
