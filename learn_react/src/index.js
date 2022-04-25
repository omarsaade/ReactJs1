//     Object      module
import React from "react";

import ReactDOM from "react-dom";

import './index.css';

import App from './App';

//that's how we import bootstrap css in our application
import 'bootstrap/dist/css/bootstrap.css';

//cz counter is default export so we dont need the curly braces



ReactDOM.render(<App />, document.getElementById('root'));
