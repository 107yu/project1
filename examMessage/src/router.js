import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Login from "./page/login/login"
import Main from "./page/main/main"


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Redirect to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
