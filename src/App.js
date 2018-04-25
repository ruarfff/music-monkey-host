import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import CssBaseline from 'material-ui/CssBaseline'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './theme'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Provider store={this.props.store}>
            <Routes history={this.props.history} />
          </Provider>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App
