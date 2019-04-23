import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory({basename: '/'});

ReactDOM.render(
   <App history={history}/>,
   document.getElementById('container')
);
