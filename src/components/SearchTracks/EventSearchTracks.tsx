import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Search from '@material-ui/icons/Search'
import * as React from 'react'
import IAction from '../../IAction'
import { formatDuration } from '../../util/formatDuration'
import EventInput from '../EventInput/EventInput'

interface IEventSearchTracksProps {
  searchResult: any[]
  searchTrack(text: string): IAction
}

const decorate = withStyles(() => ({
  accept: {
    background: '#27AE60',
    color: 'white'
  },
  trackBand: {
    padding: 0,
    fontWeight: 800,
  },
  trackName: {
    padding: 0,
  },
  listItem: {
    borderBottom: '1px solid #979797'
  },
  listItemContent: {
    maxWidth: '700px'
  }
}))

class EventSearchTracks extends React.PureComponent<
  IEventSearchTracksProps & WithStyles
  > {
  public state = {
    searchQuery: ''
  }

  public render() {
    console.log('test')
    const { searchResult } = this.props
    return (
      <div>
        <div className="SearchSection">
          <EventInput
            value={this.state.searchQuery}
            label={'search'}
            onChange={this.handleSearchInputChange}
          />
          <Button
            onClick={this.handleSearchSubmit}
          >
            <Search/>
          </Button>
        </div>

        <div className="SearchResults">
          <List>
            {searchResult && searchResult.map((track, index) => {
              this.renderTracks(track, index)
            })}
          </List>
        </div>
      </div>
    )
  }

  private renderTracks = (track: any, index: number) => {
    const { classes } = this.props
    let trackImage = <span />
    if (track.album && track.album.images && track.album.images.length > 0) {
      trackImage = (
        <ListItemIcon>
          <img
            className="EventSuggestions-trackImage"
            src={track.album.images[track.album.images.length - 1].url}
            alt={track.name}
          />
        </ListItemIcon>
      )
    }

    return (
      <ListItem key={index} className={classes.listItem} dense={true} button={true}>
        {trackImage}
        <Grid className={classes.listItemContent} container={true} spacing={24}>
          <Grid item={true} md={4} container={true} direction={'row'} alignItems={'flex-end'}>
            <Grid container={true} direction={'column'} justify={'center'} md={4} item={true}>
              <ListItemText className={classes.trackBand} primary={track.album.artists[0].name} />
              <ListItemText className={classes.trackName} primary={track.name} />
            </Grid>
            <ListItemText primary={formatDuration(track.duration_ms)}/>
          </Grid>

          <Grid item={true} md={4}>
            {track.preview_url && (
              <audio
                src={track.preview_url}
                controls={true}
                className="EventSuggestions-audio"
                preload="none"
              />
            )}
          </Grid>
        </Grid>
        <ListItemSecondaryAction>
          <Button
            className={classes.accept}
            variant="contained"
            onClick={this.handleAddTrack(track)}
          >
            ADD
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  private handleAddTrack = (track: any) => () => {
    return
  }

  private handleSearchSubmit = () => {
    this.props.searchTrack(this.state.searchQuery)
  }

  private handleSearchInputChange = (value: string) => {
    this.setState({searchQuery: value})
  }
}

export default decorate(EventSearchTracks)