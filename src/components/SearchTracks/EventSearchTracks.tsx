import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Search from '@material-ui/icons/Search'
import * as React from 'react'
import TrackItem from './TrackItem'
import IAction from '../../IAction'
import EventInput from '../EventInput/EventInput'
import IPlaylist from '../../playlist/IPlaylist'
import ISearch from '../../playlist/ISearch'
import './EventSearchTracks.scss'

interface IEventSearchTracksProps {
  searchResult: ISearch
  playlist: IPlaylist
  notification: string
  searchTrack(text: string): IAction
  addTrack(playlistId: string, uri: string): IAction
}

const decorate = withStyles(() => ({
  btn: {
    marginTop: '16px',
  }
}))

class EventSearchTracks extends React.PureComponent<
  IEventSearchTracksProps & WithStyles
  > {
  public state = {
    searchQuery: '',
    isOpen: false
  }

  public handleShowNotification = () => {
    this.setState({isOpen: true})
  }

  private handleClose = () => {
    this.setState({isOpen: false})
  }

  public render() {
    const { searchResult, classes, addTrack, playlist, notification } = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={4000}
          open={this.state.isOpen}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{notification}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
        <div className="SearchSection">
          <EventInput
            value={this.state.searchQuery}
            label={'search'}
            onChange={this.handleSearchInputChange}
          />
          <Button
            className={classes.btn}
            onClick={this.handleSearchSubmit}
          >
            <Search/>
          </Button>
        </div>

        <div className="SearchResults">
          <List>
            {searchResult.items && searchResult.items.map((track, index) => (
              <TrackItem
                showNotification={this.handleShowNotification}
                playlistId={playlist.id} addTrack={addTrack}
                track={track}
                key={index} />
            ))}
          </List>
        </div>
      </div>
    )
  }

  private handleSearchSubmit = () => {
    this.props.searchTrack(this.state.searchQuery)
  }

  private handleSearchInputChange = (value: string) => {
    this.setState({searchQuery: value})
  }
}

export default decorate(EventSearchTracks)