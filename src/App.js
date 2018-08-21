import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { create } from 'jss'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import * as React from 'react'
import { CookiesProvider } from 'react-cookie'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import { Routes } from './routes'

import { Store } from 'redux'
import theme from './theme'

const generateClassName = createGenerateClassName()
const jss = create(jssPreset())
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point')

class App extends React.Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Provider store={this.props.store}>
                <CookiesProvider>
                  <Routes history={this.props.history} />
                </CookiesProvider>
              </Provider>
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </React.Fragment>
      </JssProvider>
    )
  }
}

export default App
