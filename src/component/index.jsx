import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './home.jsx';
import Home2 from './home2.jsx';
import Test from './test.jsx';
import { ReduxPage } from './redux-page.jsx';
import { MobxPage } from './mobx-page.jsx';
import { MobxPage2 } from './mobx-page2.jsx';

import '../scss/main.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createBrowserHistory();

render (
  <Router history={history}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/test' component={Test} />
			<Route path='/redux-page' component={ReduxPage} />
	    <Route path='/mobx-page' component={MobxPage} />
      <Route path='/mobx-page2' component={MobxPage2} />
    </div>
  </Router>,
  document.getElementById('app')
)
