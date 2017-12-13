import * as React from 'react';
import './App.css';
import {
} from 'material-ui';

class ImagesBox extends React.Component {
    render() {
        return (
            <div>
                <img width="600" src="added1.png"/>
                <img width="600" src="deleted1.png"/>
           </div>
        );
    }
}

export default ImagesBox;