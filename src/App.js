import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CookiesProvider } from 'react-cookie'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes'
import './App.css'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <CookiesProvider>
          <div className="App">
            <Provider store={this.props.store}>
              <Routes history={this.props.history} />
            </Provider>
          </div>
        </CookiesProvider>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App
