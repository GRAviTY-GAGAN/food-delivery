import React from "react";
import ReactDOM from "react-dom";
import './index.css';

import { BrowserRouter as Router, } from "react-router-dom";


import App from './App';

ReactDOM.render( //router should always be on top of app component
    <Router>         
        <App />
    </Router>, document.getElementById('root')
);