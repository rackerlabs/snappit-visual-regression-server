import * as React from 'react';
import './App.css';
import {
} from 'material-ui';

interface Props2 {
    key: string;
    url: string;
}

class PRRow extends React.Component<Props2, object> {
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.url}</a>
            </li>
        );
    }
}

export interface Props {
    prs: {id: string, url: string}[];
}

class PRList extends React.Component<Props, object> {
  render() {
    const prs = this.props.prs;
    const prRows = prs.map((repo) =>
        <PRRow key={repo.id} url={repo.url} />
    );
    return (
        <div style={divStyle}>
            <h3>The following pull requests have visual changes that need review:</h3>
            <ul>
                {prRows}
            </ul>
        </div>
    );
  }
}

const divStyle = {
    borderRadius: '10px',
    borderWidth: 'thin',
    backgroundColor: '#ddd',
    width: '1250px',
    padding: '20px',
    marginLeft: '40px',
    marginBottom: '80px'
};

export default PRList;