import * as React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { teal } from 'material-ui/colors';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import OAuthDialog from './OAuthDialog';

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary" className="root">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" className="menuButton">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className="flex">
            Snappit Visual Regression
          </Typography>
          <OAuthDialog />
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
