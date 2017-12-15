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
        // Only render .png files!
        const prFiles = this.props.pr_files.filter(prFile => prFile.filename.endsWith('.png'));
        const diffRows = prFiles.map((prFile) =>
            <DiffBox key={prFile.raw_url} base_sha={this.props.base_sha} pr_file={prFile} />
        );

        return (
            <div style={divStyle}>
                {diffRows}
                <ReviewBtns/>
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
    marginLeft: '40px'
};

export default ReviewBox;