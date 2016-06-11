import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

// inject tap event
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <RaisedButton label="Click me" />
  </MuiThemeProvider>
);


ReactDOM.render(<Main />, document.getElementById('contents'));
