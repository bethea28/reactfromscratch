import React from 'react';
import { render } from 'react-dom';
class Test extends React.Component {
    render() {
        console.log('pretty');
        return <div>test boy</div>;
    }
}

const App = () => {
    return (
        <div>
            Hello PUNKS!
            <Test />
        </div>
    );
};

render(<App />, document.getElementById('index'));
