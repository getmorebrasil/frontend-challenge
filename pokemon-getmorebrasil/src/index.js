import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

ReactDOM.render(
  <>
  <BrowserRouter>
  <Router history={history}>
    <App />
  </Router>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);