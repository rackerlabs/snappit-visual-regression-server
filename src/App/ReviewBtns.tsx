import * as React from 'react';
import './App.css';
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
                Accept these changes, or submit feedback for rework?<br/>
                <Button color="primary" onClick={this.approve}>signoff</Button>
                <Button color="primary" onClick={this.rework}>rework</Button><br/>
                <textarea rows={15} cols={80}>What needs to be changed?</textarea>
            </div>
        );
    }
}

export default ReviewBtns;