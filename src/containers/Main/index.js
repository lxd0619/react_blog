/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "Components/Loading";

// const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"));
class Main extends React.Component {
  state = {};

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>{/* <Route path={`/home`} component={Home} /> */}</Switch>
      </Suspense>
    );
  }
}

export default Main;
