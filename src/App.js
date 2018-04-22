import React, { Component } from "react";
import { CookiesProvider } from "react-cookie";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Token from "./auth/Token";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <CookiesProvider>
          <div className="App">
            <header className="App-header">
              <Token />
            </header>
          </div>
        </CookiesProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
