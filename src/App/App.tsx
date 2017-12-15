import * as React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { teal } from 'material-ui/colors';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import OAuthDialog from './OAuthDialog';
import RepoList from './RepoList';
import ReviewBox from './ReviewBox';
import PRList from './PRList';
var GitHubApi = require('github');

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

interface AppProps {}

interface AppState {
  repos: {id: string, name: string}[];
  prs: {id: string, url: string}[];
  pr: {number: number, base: {sha: string}};
  pr_files: {raw_url: string, filename: string, original: {url: string}}[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      repos: [],
      prs: [],
      pr: {number: -1, base: {sha: ''}},
      pr_files: [],
    };
  }

  componentDidMount() {
    let github = new GitHubApi({
      host: 'github.rackspace.com',
      pathPrefix: '/api/v3',
      protocol: 'https'
    });

    // github.repos.getForUser({username: 'jerr9569'})
    // .then(result => {
    //   return this.setState({
    //     repos: result.data
    //   });
    // });

    github.authenticate({
      type: 'token',
      token: 'a69a95da4744ba577016b758b2369feb0a08ec38'
    });
    github.pullRequests.getAll({owner: 'SVR', repo: 'To-Do'})
    .then(result => {
      return this.setState({
        prs: result.data,
        pr: result.data[0]
      });
    });
    github.pullRequests.getFiles({owner: 'SVR', repo: 'To-Do', number: 1})
    .then(result => {
      return this.setState({
        pr_files: result.data
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
      <PRList prs={this.state.prs}/>
      <ReviewBox pr_files={this.state.pr_files} base_sha={this.state.pr.base.sha}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
