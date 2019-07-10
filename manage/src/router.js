import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import LoginPage from "./pages/login/loginPage";
import Main from "./pages/index/main";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        <Route path="/loginPage" component={LoginPage} />
        <Route path="/main" component={Main} />
        <Redirect to="/loginPage" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
