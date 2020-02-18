import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import store from '../redux/store';
import App from '../components/App';
//import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});