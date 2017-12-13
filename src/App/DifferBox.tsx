import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import CheckerBox from './CheckerBox';
import ImagesBox from './ImagesBox';

class DifferBox extends React.Component {
    state = {
        approved: false,
    };

    approved = () => {
        this.setState({ approved: true });
    }
    
    render() {
        return (
            <div>
                DifferBox......
                <ImagesBox/>
                <CheckerBox/>
            </div>
        );
    }
}

export default DifferBox;