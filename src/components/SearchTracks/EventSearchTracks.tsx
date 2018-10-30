import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Search from '@material-ui/icons/Search'
import * as React from 'react'
import TrackItem from './TrackItem'
import IAction from '../../IAction'
import EventInput from '../EventInput/EventInput'
import ISearch from '../../playlist/ISearch'
import './EventSearchTracks.scss'

interface IEventSearchTracksProps {
  searchResult: ISearch
  searchTrack(text: string): IAction
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
    searchQuery: ''
  }

  public render() {
    const { searchResult, classes } = this.props
    return (
      <div>
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
              <TrackItem track={track} index={index} />
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