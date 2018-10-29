import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import * as _ from 'lodash'
import * as React from 'react'
import LineChartWidget from '../components/Charts/LineChartWidget'
import PieChartWidget from '../components/Charts/PieChart'
import MostPopularTracks from '../components/TraksStatistic/MostPopularTracks'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import IRsvp from '../rsvp/IRsvp'
import IUser from '../user/IUser'

interface IInsightsViewProps {
  user: IUser
  events: IEvent[]
  pickedEvent: string
  getEvents(): IAction
  filterByEventPick(id: any): IAction
}

class InsightsView extends React.Component<IInsightsViewProps> {
  public state = {
    anchorEl: null
  }

  public componentDidMount() {
    this.props.getEvents()
  }

  public handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = (id: string) => () => {
    this.setState({ anchorEl: null })
    this.props.filterByEventPick(id)
  }

  public render() {
    const { anchorEl } = this.state

    const { events, pickedEvent } = this.props

    const pieChartData = this.guestsPieData(pickedEvent)

    return (
      <div className="insightsContainer">
        <div>
          <Button
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Sort
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose('all')}
          >
            <MenuItem onClick={this.handleClose('all')}>All</MenuItem>
            {events.map(
              (event, i) =>
                event.eventId && (
                  <MenuItem key={i} onClick={this.handleClose(event.eventId)}>
                    {event.name}
                  </MenuItem>
                )
            )}
          </Menu>
        </div>

        <Grid container={true} spacing={24}>
          <Grid item={true} md={6}>
            <PieChartWidget data={pieChartData} />
          </Grid>
          <Grid item={true} md={6}>
            <LineChartWidget />
          </Grid>
          <Grid item={true} md={6}>
            <MostPopularTracks events={events} />
          </Grid>
        </Grid>
      </div>
    )
  }

  private guestsPieData = (eventId: string) => {
    const { events } = this.props
    const selectedEvent =
      eventId !== 'all'
        ? events.filter(event => event.eventId === eventId)
        : events

    const allGuests = _.flattenDeep(
      selectedEvent
        .filter(event => event.guests && event.guests.length > 0)
        .map(event => event.guests && event.guests.map(guest => guest.rsvp))
    )

    const pendingGuest = allGuests.filter(
      (guest: IRsvp | undefined) => guest && guest.status === 'Pending'
    )
    const goingGuest = allGuests.filter(
      (guest: IRsvp | undefined) => guest && guest.status === 'Going'
    )
    const notGoingGuest = allGuests.filter(
      (guest: IRsvp | undefined) => guest && guest.status === 'Not going'
    )
    const maybeGuest = allGuests.filter(
      (guest: IRsvp | undefined) => guest && guest.status === 'Maybe'
    )

    return [
      {
        value: pendingGuest.length,
        name: 'Pending'
      },
      {
        value: goingGuest.length,
        name: 'Going'
      },
      {
        value: notGoingGuest.length,
        name: 'Not going'
      },
      {
        value: maybeGuest.length,
        name: 'Maybe'
      }
    ]
  }
}

export default InsightsView
