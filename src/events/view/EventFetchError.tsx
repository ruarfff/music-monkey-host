import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import IAction from '../../Action'

interface IEventFetchErrorProps {
  onTryAgain(): IAction
}

const EventFetchError: React.SFC<IEventFetchErrorProps> = ({ onTryAgain }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom={true} variant="headline" component="h2">
        Could Not Get Event
      </Typography>
      <Typography component="p">
        Sorry! There was an error trying to retrieve this event.
      </Typography>
    </CardContent>
    <CardActions>
      <Link to="/">
        <Button size="small" color="secondary">
          Cancel
        </Button>
      </Link>
      <Button size="small" color="primary" onClick={onTryAgain}>
        Try Again
      </Button>
    </CardActions>
  </Card>
)

export default EventFetchError
