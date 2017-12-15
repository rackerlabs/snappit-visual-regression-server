import * as React from 'react';
import './App.css';

export interface Props {
    raw_url: string;
    original_url: string;
}

class ImagesBox extends React.Component<Props, object> {
    render() {
        return (
            <div>
                <img width="600" height="300" src={this.props.original_url}/>
                <img width="600" height="300" src={this.props.raw_url}/>
           </div>
        );
    }
}

export default ImagesBox;