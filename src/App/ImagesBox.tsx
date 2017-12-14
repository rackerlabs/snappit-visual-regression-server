import * as React from 'react';
import './App.css';
import {
} from 'material-ui';

export interface Props {
    raw_url: string;
}

class ImagesBox extends React.Component<Props, object> {
    render() {
        return (
            <div>
                <img width="600" src=""/>
                <img width="600" src={this.props.raw_url}/>
           </div>
        );
    }
}

export default ImagesBox;