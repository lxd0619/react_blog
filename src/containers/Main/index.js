/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Drawer from "./components/Drawer";
import Loading from "Components/Loading";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "../Home"));
const Article = lazy(() =>
  import(/* webpackChunkName: "Article" */ "../Article")
);
const Frontend = lazy(() =>
  import(/* webpackChunkName: "Frontend" */ "../Front_end")
);
const Backend = lazy(() =>
  import(/* webpackChunkName: "Backend" */ "../Back_end")
);
const Notes = lazy(() => import(/* webpackChunkName: "Notes" */ "../Notes"));
const Edit = lazy(() => import(/* webpackChunkName: "Edit" */ "../Edit"));
class Main extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Drawer />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/article" component={Article} exact />
            <Route path="/frontend" component={Frontend} exact />
            <Route path="/backend" component={Backend} exact />
            <Route path="/notes" component={Notes} exact />
            <Route path="/edit" component={Edit} exact />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default Main;
