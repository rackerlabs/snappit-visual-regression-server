import * as React from 'react';
import './App.css';
import {
} from 'material-ui';

interface Props2 {
    key: string;
    repoName: string;
}

class RepoRow extends React.Component<Props2, object> {
    render() {
        return (
            <li>{this.props.repoName}</li>
        );
    }
}

export interface Props {
    repos: {id: string, name: string}[];
}

class RepoList extends React.Component<Props, object> {
  render() {
    const repos = this.props.repos;
    const repoRows = repos.map((repo) =>
        <RepoRow key={repo.id} repoName={repo.name} />
    );
    return (
        <ul>
            {repoRows}
        </ul>
    );
  }
}

export default RepoList;