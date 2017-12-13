import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import CheckerBox from './CheckerBox';
import ImagesBox from './ImagesBox';

class DiffBox extends React.Component {
    state = {
        approved: false,
    };

    approved = () => {
        this.setState({ approved: true });
    }
    
    render() {
        return (
            <div>
                DiffBox......
                <ImagesBox/>
                <CheckerBox/>
            </div>
        );
    }
}

export default DiffBox;