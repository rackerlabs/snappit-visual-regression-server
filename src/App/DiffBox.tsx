import * as React from 'react';
import './App.css';
import {
} from 'material-ui';
import CheckerBox from './CheckerBox';
import ImagesBox from './ImagesBox';

export interface Props {
    key: string;
    raw_url: string;
}

class DiffBox extends React.Component<Props, object> {
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
                {this.props.raw_url}
                <ImagesBox raw_url={this.props.raw_url} />
                <CheckerBox/>
            </div>
        );
    }
}

export default DiffBox;