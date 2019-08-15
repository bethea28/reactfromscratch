// import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

import './style.scss';

// import PageInterface from '../PageInterface';
export interface Page {
    color: string;
}

class App extends React.Component<Page, {}> {
    render() {
        return (
            <div>
                {this.props.color}
                <h1>Welcome to React with Typescript</h1>
                <p>The color of this page is</p>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App color='blue' />, document.getElementById('index'));
