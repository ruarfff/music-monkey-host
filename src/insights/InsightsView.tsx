import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import * as _ from 'lodash'
import * as React from 'react'
import PieChartWidget from '../components/Charts/PieChart'
import IEvent from '../event/IEvent'
import IAction from '../IAction'
import IRsvp from '../rsvp/IRsvp'
import IUser from '../user/IUser'

const decorate = withStyles(() => {

})

interface IInsightsViewProps {
  user: IUser
  events: IEvent[]
  getEvents(): IAction
}

class InsightsView extends React.Component<IInsightsViewProps & WithStyles>{
  public componentDidMount() {
    this.props.getEvents()
  }

  public render() {

    const pieChartData = this.guestsStatistic()

    return (
      <Grid container={true} spacing={24}>
        <PieChartWidget data={pieChartData} />
      </Grid>
    )
  }

  private guestsStatistic = () => {
    const { events } = this.props

    const allGuests = _.flattenDeep(events.filter((event) => event.guests && event.guests.length > 0)
      .map((event) => event.guests && event.guests.map(guest => guest.rsvp)))

    const pendingGuest = allGuests.filter((guest: IRsvp) => guest && guest.status === 'Pending')
    const goingGuest = allGuests.filter((guest: IRsvp) => guest && guest.status === 'Going')
    const notGoingGuest = allGuests.filter((guest: IRsvp) => guest && guest.status === 'Not going')
    const maybeGuest = allGuests.filter((guest: IRsvp) => guest && guest.status === 'Maybe')

    return [
      {
        value: pendingGuest.length,
        name: 'Pending',
      },
      {
        value: goingGuest.length,
        name: 'Going',
      },
      {
        value: notGoingGuest.length,
        name: 'Not going'
      },
      {
        value: maybeGuest.length,
        name: 'Maybe',
      }
    ]
  }
}

export default decorate(InsightsView)