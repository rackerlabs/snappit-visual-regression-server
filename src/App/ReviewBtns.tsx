import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import { Button } from 'material-ui';

class ReviewBtns extends React.Component {
    state = {
        approved: false,
        rework: false,
    };

    approve = () => {
        this.setState({ approved: true });
    }
    
    rework = () => {
        this.setState({ rework: true });
    }
    
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.approve}>Approve</Button>
                <Button color="primary" onClick={this.rework}>Rework</Button>
            </div>
        );
    }
}

export default ReviewBtns;