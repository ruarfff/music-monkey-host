import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from 'material-ui/CssBaseline'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import { Provider } from 'react-redux'
import { Routes } from './routes'

import theme from './theme'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Provider store={this.props.store}>
              <Routes history={this.props.history} />
            </Provider>
          </MuiPickersUtilsProvider>
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
