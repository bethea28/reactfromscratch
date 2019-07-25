import React from "react";
import { render } from "react-dom";

const App = () => {
    return <div>Hello PUNKS!</div>;
};

// class App extends React.Component {
//     render = () => {
//         return (<div>test boy</div>;)
//     };
// }

render(<App />, document.getElementById("index"));
