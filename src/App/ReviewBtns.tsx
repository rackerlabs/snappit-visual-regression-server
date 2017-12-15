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
                Would you like to sign off on these changes, submit feedback for rework?<br/>
                <Button color="primary" onClick={this.approve}>signoff</Button>
                <Button color="primary" onClick={this.rework}>rework</Button><br/>
                <textarea rows={15} cols={80}>If rework, what needs to be changed?</textarea>
            </div>
        );
    }
}

export default ReviewBtns;