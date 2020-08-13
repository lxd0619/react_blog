import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import Front_end from "../Front_end";
import Back_end from "../Back_end";

const MainRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/frontend" component={Front_end} />
      <Route path="/backend" component={Back_end} />
      <Redirect to="/frontend" />
    </Switch>
  </HashRouter>
);

export default MainRouter;
