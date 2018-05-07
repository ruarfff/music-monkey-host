import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  actions: {
    display: 'flex'
  },
  card: {
    maxWidth: '16em',
    width: '16em',
    marginTop: '2em'
  },
  expand: {
    marginLeft: 'auto',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})


class EventCard extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, event } = this.props

    return (
      <div>
        <Card className={classes.card}>
          <Link to={"/events/" + event.eventId}>
            <CardHeader
              subheader={
                event.startDateTime ? event.startDateTime.format('LLL') : ''
              }
            />
            <CardMedia
              className={classes.media}
              image={event.imageUrl || '/img/partycover-sm.png'}
              title="Event Image"
            />
          </Link>
          <CardContent>
            <Typography component="p">{event.venue}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>

            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="caption">
                {event.name}
              </Typography>
              <Typography paragraph>{event.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
}

export default withStyles(styles)(EventCard)
