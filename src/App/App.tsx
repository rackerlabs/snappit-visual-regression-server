import * as React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { teal } from 'material-ui/colors';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import OAuthDialog from './OAuthDialog';
import RepoList from './RepoList';
import ReviewBox from './ReviewBox';
var GitHubApi = require('github');

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

interface AppProps {}

interface AppState {
  repos: {id: string, name: string}[];
}

class App extends React.Component<AppProps, AppState> {
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

    let github = new GitHubApi();
    github.repos.getForUser({username: 'jseutter'})
    .then(result => {
      return this.setState({
        repos: result.data
      });
    });
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
