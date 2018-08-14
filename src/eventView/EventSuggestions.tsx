import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton/IconButton'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography/Typography'
import BlockIcon from '@material-ui/icons/Block'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DoneAll from '@material-ui/icons/DoneAll'
import * as classNames from 'classnames'
import * as React from 'react'
import IAction from '../IAction'
import IDecoratedSuggestion from '../suggestion/IDecoratedSuggestion'
import ITrack from '../track/ITrack'

import ISuggestion from '../suggestion/ISuggestion'
import './EventSuggestions.css'

interface IEventSuggestionsProps {
  suggestions: IDecoratedSuggestion[]
  acceptAllSuggestions(): IAction
  acceptSuggestion(suggestion: ISuggestion): IAction
  rejectSuggestion(suggestion: ISuggestion): IAction
}

interface IEventSuggestionsState {
  tracksBeingRemoved: ITrack
}

export default class EventSuggestions extends React.PureComponent<
  IEventSuggestionsProps,
  IEventSuggestionsState
> {
  constructor(props: IEventSuggestionsProps) {
    super(props)
    this.state = { tracksBeingRemoved: {} } as IEventSuggestionsState
  }

  public render() {
    const { suggestions } = this.props
    if (!suggestions || suggestions.length < 1) {
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
            {this.renderAcceptButtons()}
          </Grid>
          <Grid item={true} sm={12}>
            <List>
              {suggestions.map(decoratedSuggestion =>
                this.renderSuggestion(decoratedSuggestion)
              )}
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }

  private renderSuggestion = (decoratedSuggestion: IDecoratedSuggestion) => {
    const { track } = decoratedSuggestion
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
      <Slide
        key={track.uri}
        in={track.uri !== this.state.tracksBeingRemoved.uri}
        direction="right"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <ListItem dense={true} button={true}>
          {trackImage}
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={this.handleSuggestionRejected(decoratedSuggestion)}
            >
              <BlockIcon />
            </IconButton>
            <IconButton
              aria-label="Accept"
              onClick={this.handleSuggestionAccepted(decoratedSuggestion)}
            >
              <CheckCircleIcon />
            </IconButton>
          </ListItemSecondaryAction>
          <ListItemText primary={track.name} />
        </ListItem>
      </Slide>
    )
  }

  private handleSuggestionAccepted = (
    decoratedSuggestion: IDecoratedSuggestion
  ) => () => {
    const { track, suggestion } = decoratedSuggestion
    this.setState({ tracksBeingRemoved: track })
    setTimeout(() => {
      this.setState({ tracksBeingRemoved: {} as ITrack })
      this.props.acceptSuggestion(suggestion)
    }, 700)
  }

  private handleSuggestionRejected = (
    decoratedSuggestion: IDecoratedSuggestion
  ) => () => {
    const { track, suggestion } = decoratedSuggestion
    this.setState({ tracksBeingRemoved: track })
    setTimeout(() => {
      this.setState({ tracksBeingRemoved: {} as ITrack })
      this.props.rejectSuggestion(suggestion)
    }, 700)
  }

  private handleAcceptAllClicked = () => {
    this.props.acceptAllSuggestions()
  }

  private renderAcceptButtons = () => {
    return (
      <div>
        <Button
          className="EventSuggestions-button"
          variant="raised"
          color="primary"
          onClick={this.handleAcceptAllClicked}
        >
          <DoneAll
            className={classNames(
              'EventSuggestions-leftIcon',
              'EventSuggestions-iconSmall'
            )}
          />
          Accept All{' '}
        </Button>
      </div>
    )
  }
}
