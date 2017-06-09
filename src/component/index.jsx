import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './home.jsx';
import Test from './test.jsx';

import '../scss/main.scss';

const history = createBrowserHistory();

render (
  <Router history={history}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Test} />
    </div>
  </Router>,
  document.getElementById('app')
)
