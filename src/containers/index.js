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
const Article = lazy(() =>
  import(/* webpackChunkName: "Article" */ "./Article")
);
const Frontend = lazy(() =>
  import(/* webpackChunkName: "Frontend" */ "./Front_end")
);
const Backend = lazy(() =>
  import(/* webpackChunkName: "Backend" */ "./Back_end")
);
const Edit = lazy(() => import(/* webpackChunkName: "Edit" */ "./Edit"));
const Main = lazy(() => import(/* webpackChunkName: "Main" */ "./Main"));

class AppRouter extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/article" component={Article} exact />
            <Route path="/frontend" component={Frontend} exact />
            <Route path="/backend" component={Backend} exact />
            <Route path="/edit" component={Edit} exact />
            <PrivateRoute path={`/`} component={Main} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

/**
 * private route
 */
class PrivateRoute extends React.Component {
  render() {
    let { component: Component, ...rest } = this.props;
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
}

export default AppRouter;
