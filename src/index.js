import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import './index.css';
import '../node_modules/material-components-web/dist/material-components-web.css';
// eslint-disable-next-line
import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
