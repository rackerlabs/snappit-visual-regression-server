import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import CheckerBox from './CheckerBox';
import ImagesBox from './ImagesBox';
var GitHubApi = require('github');

export interface Props {
    base_sha: string;
    pr_file: {raw_url: string, filename: string, original: {url: string}};
}

class DiffBox extends React.Component<Props, object> {
    state = {
        approved: false,
        originalUrl: '',
    };

    approved = () => {
        this.setState({ approved: true });
    }
    
    componentDidMount() {
        let github = new GitHubApi({
          host: 'github.rackspace.com',
          pathPrefix: '/api/v3',
          protocol: 'https'
        });
        github.authenticate({
          type: 'token',
          token: 'a69a95da4744ba577016b758b2369feb0a08ec38'
        });

        let refspec = this.props.base_sha;
        let path = this.props.pr_file.filename;
        github.repos.getContent({owner: 'SVR', repo: 'To-Do', path: path, ref: refspec})
        .then(result => {
          this.setState({
            originalUrl: result.data.download_url
          });
        });

      }

      render() {
        return (
            <div>
                <ImagesBox original_url={this.state.originalUrl} raw_url={this.props.pr_file.raw_url} />
                <CheckerBox/>
            </div>
        );
    }
}

export default DiffBox;