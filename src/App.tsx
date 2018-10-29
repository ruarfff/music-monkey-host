import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { History } from 'history'
import { create } from 'jss'
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import * as React from 'react'
import { CookiesProvider } from 'react-cookie'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { Routes } from './routes'

import theme from './theme'

const generateClassName = createGenerateClassName()
const jss: any = create(jssPreset())
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = document.getElementById('jss-insertion-point')

interface IAppProps {
  store: Store
  history: History
}

class App extends React.PureComponent<IAppProps> {
  public render() {
    const { store, history } = this.props

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Provider store={store}>
                <CookiesProvider>
                  <Routes history={history} />
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
