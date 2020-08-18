import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// importing router
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    //wrapping App with Router
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);
