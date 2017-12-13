import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import { Checkbox } from 'material-ui';

class CheckerBox extends React.Component {
    state = {
        approved: false,
    };

    approved = () => {
        this.setState({ approved: true });
    }
    
    render() {
        return (
            <div>
                <Checkbox color="primary" onClick={this.approved}>Approve</Checkbox>
            </div>
        );
    }
}

export default CheckerBox;