import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
import 'popper.js';

import App from './app.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
