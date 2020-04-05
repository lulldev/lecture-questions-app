import React from "react";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import HomePage from "ui/pages/Home";
import QuestionsPage from "ui/pages/Questions";

const browserHistory = createBrowserHistory();

export const routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/questions" component={QuestionsPage} />
    </Switch>
  </Router>
);
