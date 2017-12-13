import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import DiffBox from './DiffBox';
import ReviewBtns from './ReviewBtns';

class ReviewBox extends React.Component {
    state = {
        approved: false,
    };

    approved = () => {
        this.setState({ approved: true });
    }
    
    render() {
        return (
            <div>
                ReviewBox......
                <DiffBox/>
                <ReviewBtns/>
            </div>
        );
    }
}

export default ReviewBox;