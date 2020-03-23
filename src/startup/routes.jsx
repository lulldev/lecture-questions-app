import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import HomePage from 'ui/pages/Home';
import VotingPage from 'ui/pages/Voting';

const browserHistory = createBrowserHistory();

export const routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/voting" component={VotingPage}/>
    </Switch>
  </Router>
);