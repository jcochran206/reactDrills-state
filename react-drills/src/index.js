import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from '../src/state-drills/HelloWorld'
import App from './App';
import Boom from '../src/state-drills/Boom';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <App />
    <Boom />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

