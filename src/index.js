import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from './config/store';

import './index.css';
import LoginScreen from './conponents/login/LoginScreen';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <LoginScreen /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
