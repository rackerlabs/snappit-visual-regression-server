import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import DiffBox from './DiffBox';
import ReviewBtns from './ReviewBtns';

export interface Props {
    pr_files: {raw_url: string, filename: string, original: {url: string}}[];
    base_sha: string;
}

class ReviewBox extends React.Component<Props, object> {
    state = {
        approved: false,
    };

    approved = () => {
        this.setState({ approved: true });
    }
    
    render() {
        const pr_files = this.props.pr_files;
        const diffRows = pr_files.map((prFile) =>
            <DiffBox key={prFile.raw_url} base_sha={this.props.base_sha} pr_file={prFile} />
        );

        return (
            <div>
                ReviewBox......
                {diffRows}
                <ReviewBtns/>
            </div>
        );
    }
}

export default ReviewBox;