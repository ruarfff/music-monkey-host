import React, { Component } from 'react';
import { CookiesProvider } from 'react-cookie';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <CookiesProvider>
          <div className="App">
            <Router>
              <Route path="/" component={Home} />
            </Router>
          </div>
        </CookiesProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
