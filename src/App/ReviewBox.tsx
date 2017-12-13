import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import DifferBox from './DifferBox';
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
                <DifferBox/>
                <ReviewBtns/>
            </div>
        );
    }
}

export default ReviewBox;