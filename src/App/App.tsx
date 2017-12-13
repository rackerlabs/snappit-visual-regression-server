import * as React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { teal } from 'material-ui/colors';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import OAuthDialog from './OAuthDialog';
import RepoList from './RepoList';
import ReviewBox from './ReviewBox';
var Octokat = require('./octokat');

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

interface AppProps {}

interface AppState {
  repos: Array<any>
}

class App extends React.Component<AppProps, AppState> {
  REPOS = [
    {name: 'ofxparse-2'},
    {name: 'ofxparse-3'}
  ];

  constructor(props: AppProps) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.setState({
      repos: []
    });
    let octo = new Octokat();
    let repos = octo.users('jseutter').repos;
    repos.fetchAll().then(function (this: any, result: any): any {
      return this.setState({
        repos: result
      });
    }.bind(this));
  }

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
      <RepoList repos={this.state.repos}/>
      <ReviewBox/>
      </MuiThemeProvider>
    );
  }
}

export default App;
