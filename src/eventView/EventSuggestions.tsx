import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton/IconButton'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Typography from '@material-ui/core/Typography/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DoneAll from '@material-ui/icons/DoneAll'
import * as classNames from 'classnames'
import * as React from 'react'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'

import './EventSuggestions.css'

interface IEventSuggestionsProps {
  suggestions: IDecoratedSuggestion[]
  onAcceptSuggestions(suggestions: IDecoratedSuggestion[]): void
}

export default class EventSuggestions extends React.PureComponent<
  IEventSuggestionsProps
> {
  public render() {
    const { suggestions } = this.props
    const pendingSuggestions = suggestions.filter(
      s => !s.suggestion.accepted && !s.suggestion.rejected
    )
    if (pendingSuggestions.length < 1) {
      return (
        <Typography align="center" variant="subheading">
          Currently no Suggestions
        </Typography>
      )
    }
    return (
      <div className="EventSuggestions-root">
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
    let trackImage = <span />
    if (track.album && track.album.images && track.album.images.length > 0) {
      trackImage = (
        <img
          className="EventSuggestions-trackImage"
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
    return (
      <div>
        <Button
          className="EventSuggestions-button"
          variant="raised"
          color="primary"
          onClick={this.handleAcceptAllClicked(suggestions)}
        >
          <DoneAll
            className={classNames('EventSuggestions-leftIcon', 'EventSuggestions-iconSmall')}
          />
          Accept All{' '}
        </Button>
      </div>
    )
  }
}
