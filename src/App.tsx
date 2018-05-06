import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import CssBaseline from 'material-ui/CssBaseline'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Routes } from './routes'

import { Store } from 'redux';
import theme from './theme'

interface IAppProps {
  store: Store,
  history: {}
} 

class App extends React.Component<IAppProps, {}> {
  public render() {
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

export default App
