/**
 * container
 */
import React, { Suspense, lazy } from "react";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../Home";
import Frontend from "../Front_end";
import Backend from "../Back_end";

class AppRouter extends React.Component {
  state = {};

  render() {
    const liStyle = {
      float: "left",
      marginRight: "20px",
    };
    return (
      <HashRouter>
        <ul style={{ listStyle: "none" }}>
          <li style={liStyle}>
            <NavLink to="/">首页</NavLink>
          </li>
          <li style={liStyle}>
            <NavLink to="/frontend">前端</NavLink>
          </li>
          <li style={liStyle}>
            <NavLink to="backend">后端</NavLink>
          </li>
        </ul>
        <div style={{ clear: "both" }}>
          <Route path="/" component={Home} exact />
          <Route path="/frontend" component={Frontend} />
          <Route path="/backend" component={Backend} />
          <Redirect to="/" />
        </div>
      </HashRouter>
    );
  }
}

export default AppRouter;
