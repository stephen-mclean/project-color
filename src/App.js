import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { VARIANT_ROUTE, PALETTE_ROUTE, ACCESSIBILITY_ROUTE } from "./constants";
import Nav from "./components/Nav/Nav";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Nav />

      <Router>
        <Switch>
          <Route
            path={VARIANT_ROUTE.path}
            component={VARIANT_ROUTE.component}
          />
          <Route
            path={PALETTE_ROUTE.path}
            component={PALETTE_ROUTE.component}
          />
          <Route
            path={ACCESSIBILITY_ROUTE.path}
            component={ACCESSIBILITY_ROUTE.component}
          />
          <Redirect from="/" to={VARIANT_ROUTE.path} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
