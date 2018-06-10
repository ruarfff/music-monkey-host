import { Typography, WithStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton/IconButton'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { Theme } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DoneAll from '@material-ui/icons/DoneAll'
import * as classNames from 'classnames'
import * as React from 'react'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'
import IUser from '../user/IUser'

interface IUserSuggestionsViewProps {
  user: IUser
  suggestions: IDecoratedSuggestion[]
  onAcceptSuggestions(suggestions: IDecoratedSuggestion[]): void
}

const decorate = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
  },
  trackImage: {
    maxWidth: 64,
    maxHeight: 64
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
}))

type PropsWithStyles = IUserSuggestionsViewProps &
  WithStyles<
    | 'root'
    | 'button'
    | 'trackImage'
    | 'card'
    | 'media'
    | 'leftIcon'
    | 'rightIcon'
    | 'iconSmall'
  >

class UserSuggestionsView extends React.Component<PropsWithStyles, {}> {
  public render() {
    const { classes, suggestions } = this.props
    const pendingSuggestions = suggestions.filter(s => !s.suggestion.accepted)
    if (pendingSuggestions.length < 1) {
      return (
        <Typography align="center" variant="subheading">
          Currently no Suggestions
        </Typography>
      )
    }
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={24}>
          <Grid item={true} sm={12}>
            {this.renderAcceptButtons(pendingSuggestions)}
          </Grid>
          <Grid item={true} sm={12}>
            {this.renderSuggestionList(pendingSuggestions)}
          </Grid>
        </Grid>
      </div>
    )
  }

  private renderSuggestionList = (suggestions: IDecoratedSuggestion[]) => {
    return (
      <List>
        {suggestions.map(suggestion => this.renderTrack(suggestion.track))}
      </List>
    )
  }

  private renderTrack = (track: ITrack) => {
    const classes: any = this.props.classes
    let trackImage = <span />
    if (track.album && track.album.images && track.album.images.length > 0) {
      trackImage = (
        <img
          className={classes.trackImage}
          src={track.album.images[track.album.images.length - 1].url}
          alt={track.name}
        />
      )
    }

    return (
      <ListItem key={track.uri} dense={true} button={true}>
        {trackImage}
        <ListItemSecondaryAction>
          <IconButton aria-label="Accept">
            <CheckCircleIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemText primary={track.name} />
      </ListItem>
    )
  }
  private handleAcceptAllClicked = (
    suggestions: IDecoratedSuggestion[]
  ) => () => {
    this.props.onAcceptSuggestions(suggestions)
  }

  private renderAcceptButtons = (suggestions: IDecoratedSuggestion[]) => {
    const classes: any = this.props.classes

    return (
      <div>
        <Button
          className={classes.button}
          variant="raised"
          color="primary"
          onClick={this.handleAcceptAllClicked(suggestions)}
        >
          <DoneAll
            className={classNames(classes.leftIcon, classes.iconSmall)}
          />
          Accept All{' '}
        </Button>
      </div>
    )
  }
}

export default decorate(UserSuggestionsView)
