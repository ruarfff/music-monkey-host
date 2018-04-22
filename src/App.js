import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CookiesProvider } from 'react-cookie'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './home/Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <CookiesProvider>
          <div className="App">
            <Provider store={this.props.store}>
              <Router>
                <Route path="/" component={Home} />
              </Router>
            </Provider>
          </div>
        </CookiesProvider>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
