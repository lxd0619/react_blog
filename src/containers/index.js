import React, { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  //BrowserRouter as Router,
  Route,
  //   Redirect,
  Switch,
} from "react-router-dom";
import Loading from "Components/Loading";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"));
const Main = lazy(() => import(/* webpackChunkName: "Main" */ "./Main"));

class AppRouter extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={`/`} component={Main} />
            <Route exact path={`/home`} component={Home} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default AppRouter;
