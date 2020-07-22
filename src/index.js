import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './libs/fontawesome/fontawesome-all.min';
import './styles/base.scss';
import App from './App';
import Portfolio from './pages/Portfolio';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
